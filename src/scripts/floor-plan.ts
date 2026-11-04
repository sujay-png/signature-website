// Interactive Floor Plan Explorer Script
import { floorPlanData } from '../data/floorPlans';

export function initFloorPlanExplorer() {
  const levelTabs = document.querySelectorAll('[data-level-tab]');
  const unitsContainer = document.querySelector('.units-selector-col');
  const planImg = document.getElementById('active-plan-image') as HTMLImageElement | null;
  const planUnitTitle = document.getElementById('active-plan-title');
  const planUnitArea = document.getElementById('active-plan-area');
  const planUnitDesc = document.getElementById('active-plan-desc');
  const planFeaturesContainer = document.getElementById('active-plan-features');
  const zoomBtn = document.getElementById('plan-zoom-btn');
  const planContainer = document.querySelector('.plan-display-container');

  if (!levelTabs.length || !unitsContainer || !planImg) return;

  let currentLevelId = 'typical-floors';
  let currentUnitId = 'tf-001';

  function renderLevel(levelId: string) {
    currentLevelId = levelId;
    const level = floorPlanData.find((l) => l.id === levelId);
    if (!level) return;

    // Update level tabs active state
    levelTabs.forEach((tab) => {
      if (tab.getAttribute('data-level-tab') === levelId) {
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      }
    });

    // Populate units list
    unitsContainer!.innerHTML = '';
    level.units.forEach((unit, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `unit-option ${idx === 0 ? 'active' : ''}`;
      btn.setAttribute('data-unit-id', unit.id);
      btn.setAttribute('aria-pressed', idx === 0 ? 'true' : 'false');

      const areaDisplay = typeof unit.saleableAreaSqFt === 'number'
        ? `${unit.saleableAreaSqFt} sq. ft.`
        : unit.saleableAreaSqFt;

      btn.innerHTML = `
        <span class="unit-option__name">${unit.unitNo}</span>
        <span class="unit-option__type">${unit.type}</span>
        <span class="unit-option__area">${areaDisplay}</span>
      `;

      btn.addEventListener('click', () => {
        unitsContainer!.querySelectorAll('.unit-option').forEach((c) => {
          c.classList.remove('active');
          c.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        selectUnit(unit.id);
      });

      unitsContainer!.appendChild(btn);
    });

    // Select the first unit by default
    if (level.units.length > 0) {
      selectUnit(level.units[0].id);
    }
  }

  function selectUnit(unitId: string) {
    currentUnitId = unitId;
    const level = floorPlanData.find((l) => l.id === currentLevelId);
    if (!level) return;
    const unit = level.units.find((u) => u.id === unitId);
    if (!unit) return;

    if (planImg) {
      planImg.style.opacity = '0';
      planImg.onload = () => { if (planImg) planImg.style.opacity = '1'; };
      planImg.src = unit.image;
      planImg.alt = `${unit.unitNo} - ${unit.type} Floor Plan Technical Drawing`;
      if (planImg.complete) planImg.style.opacity = '1';
    }

    if (planUnitTitle) {
      planUnitTitle.textContent = `${unit.unitNo} (${unit.type})`;
    }

    if (planUnitArea) {
      planUnitArea.textContent = typeof unit.saleableAreaSqFt === 'number' 
        ? `${unit.saleableAreaSqFt} sq. ft. (Saleable Area)`
        : unit.saleableAreaSqFt;
    }

    if (planUnitDesc) {
      planUnitDesc.textContent = unit.description;
    }

    if (planFeaturesContainer) {
      planFeaturesContainer.innerHTML = '';
      unit.features.forEach((feature) => {
        const item = document.createElement('li');
        item.textContent = feature;
        planFeaturesContainer.appendChild(item);
      });
    }
  }

  // Bind Level Tabs
  levelTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const levelId = tab.getAttribute('data-level-tab');
      if (levelId) renderLevel(levelId);
    });
  });

  // Handle Zoom Click
  const openZoom = () => {
    const level = floorPlanData.find((l) => l.id === currentLevelId);
    const unit = level?.units.find((u) => u.id === currentUnitId);
    if (unit) {
      const fullImgSrc = unit.fullImage || unit.image;
      const caption = `${unit.unitNo} - ${unit.type} | Saleable Area: ${typeof unit.saleableAreaSqFt === 'number' ? unit.saleableAreaSqFt + ' sq. ft.' : unit.saleableAreaSqFt}`;
      const win = window as unknown as { openLightboxModal?: (src: string, caption: string) => void };
      if (win.openLightboxModal) {
        win.openLightboxModal(fullImgSrc, caption);
      }
    }
  };

  if (zoomBtn) zoomBtn.addEventListener('click', openZoom);
  if (planContainer) planContainer.addEventListener('click', openZoom);

  // Initialize with Typical floors
  renderLevel('typical-floors');
}
