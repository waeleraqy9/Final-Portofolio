/**
 * ENG. WAEL MOHAMED ERAQY - PROJECT CONTROLS LABORATORY
 * Interactive Earned Value Management (EVM) Simulator & Mathematical Engine
 * Conforms to PMI PMBOK & AACE International Standards
 */

document.addEventListener('DOMContentLoaded', () => {
    initEvmSimulator();
});

function initEvmSimulator() {
    const inputBac = document.getElementById('input-bac');
    const inputPlanned = document.getElementById('input-planned');
    const inputActual = document.getElementById('input-actual-progress');
    const inputAc = document.getElementById('input-ac');

    if (!inputBac || !inputPlanned || !inputActual || !inputAc) return;

    // Add listeners
    [inputBac, inputPlanned, inputActual, inputAc].forEach(input => {
        input.addEventListener('input', updateEvmCalculations);
    });

    // Initial run
    updateEvmCalculations();
}

// Preset Scenarios
window.applyEvmPreset = function(type) {
    const inputBac = document.getElementById('input-bac');
    const inputPlanned = document.getElementById('input-planned');
    const inputActual = document.getElementById('input-actual-progress');
    const inputAc = document.getElementById('input-ac');

    if (!inputBac || !inputPlanned || !inputActual || !inputAc) return;

    if (type === 'healthy') {
        inputBac.value = 12000000;
        inputPlanned.value = 60;
        inputActual.value = 62;
        inputAc.value = 7100000; // EV = 7.44M, CPI ~ 1.05
    } else if (type === 'cost_overrun') {
        inputBac.value = 10000000;
        inputPlanned.value = 75;
        inputActual.value = 70;
        inputAc.value = 8500000; // EV = 7.0M, CPI = 0.82
    } else if (type === 'delayed') {
        inputBac.value = 15000000;
        inputPlanned.value = 80;
        inputActual.value = 60;
        inputAc.value = 9200000; // EV = 9.0M, SPI = 0.75
    }

    updateEvmCalculations();
};

function formatCurrency(num) {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
}

window.updateEvmCalculations = function() {
    const inputBac = document.getElementById('input-bac');
    const inputPlanned = document.getElementById('input-planned');
    const inputActual = document.getElementById('input-actual-progress');
    const inputAc = document.getElementById('input-ac');

    if (!inputBac || !inputPlanned || !inputActual || !inputAc) return;

    const bac = parseFloat(inputBac.value) || 0;
    const plannedPct = parseFloat(inputPlanned.value) || 0;
    const actualPct = parseFloat(inputActual.value) || 0;
    const ac = parseFloat(inputAc.value) || 0;

    // Display input values
    document.getElementById('val-display-bac').textContent = `${formatCurrency(bac)} SAR`;
    document.getElementById('val-display-planned').textContent = `${plannedPct}%`;
    document.getElementById('val-display-actual-prog').textContent = `${actualPct}%`;
    document.getElementById('val-display-ac').textContent = `${formatCurrency(ac)} SAR`;

    // Mathematical calculations
    const pv = (plannedPct / 100) * bac;
    const ev = (actualPct / 100) * bac;
    const cpi = ac > 0 ? (ev / ac) : 1;
    const spi = pv > 0 ? (ev / pv) : 1;
    const cv = ev - ac;
    const sv = ev - pv;
    const eac = cpi > 0 ? (bac / cpi) : bac;
    const vac = bac - eac;

    // Update DOM Results
    document.getElementById('res-pv').textContent = formatCurrency(pv);
    document.getElementById('res-ev').textContent = formatCurrency(ev);
    document.getElementById('res-cpi').textContent = cpi.toFixed(2);
    document.getElementById('res-spi').textContent = spi.toFixed(2);
    document.getElementById('res-eac').textContent = `${formatCurrency(eac)} SAR`;

    // VAC display with styling
    const vacPill = document.getElementById('res-vac-pill');
    const lang = document.documentElement.lang || 'ar';
    const vacPrefix = lang === 'ar' ? 'الانحراف المالي المتوقع (VAC): ' : 'Forecast Variance at Completion (VAC): ';
    vacPill.textContent = `${vacPrefix} ${vac >= 0 ? '+' : ''}${formatCurrency(vac)} SAR`;
    if (vac >= 0) {
        vacPill.style.color = '#34d399';
    } else {
        vacPill.style.color = '#f87171';
    }

    // Status Badges & Colors
    const statusCpi = document.getElementById('status-cpi');
    const statusSpi = document.getElementById('status-spi');
    const boxCpi = document.getElementById('box-cpi');
    const boxSpi = document.getElementById('box-spi');

    if (cpi >= 1.0) {
        statusCpi.className = 'res-status status-good';
        statusCpi.textContent = lang === 'ar' ? 'ضمن الميزانية (Under Budget)' : 'Under Budget';
        boxCpi.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    } else {
        statusCpi.className = 'res-status status-bad';
        statusCpi.textContent = lang === 'ar' ? 'تجاوز في التكلفة (Over Budget)' : 'Over Budget';
        boxCpi.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    }

    if (spi >= 1.0) {
        statusSpi.className = 'res-status status-good';
        statusSpi.textContent = lang === 'ar' ? 'متقدم على الجدول (Ahead)' : 'Ahead of Schedule';
        boxSpi.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    } else {
        statusSpi.className = 'res-status status-bad';
        statusSpi.textContent = lang === 'ar' ? 'متأخر زمنياً (Behind)' : 'Behind Schedule';
        boxSpi.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    }

    // Dynamic Diagnosis
    updateDiagnosisText(cpi, spi, cv, sv, vac, lang);
}

function updateDiagnosisText(cpi, spi, cv, sv, vac, lang) {
    const diagEl = document.getElementById('evm-diagnosis-text');
    if (!diagEl) return;

    let icon = 'fa-circle-check text-success';
    let textAr = '';
    let textEn = '';

    if (cpi >= 1.0 && spi >= 1.0) {
        icon = 'fa-circle-check text-success';
        textAr = `التشخيص الفني: المشروع في وضع ممتاز (Healthy). كفاءة التكلفة (${cpi.toFixed(2)}) وإنجاز الجدول الزمني (${spi.toFixed(2)}) أعلى من المخطط، مع تحقيق وفر مالي متوقع قدره ${formatCurrency(vac)} ريال. التوصية: الحفاظ على معدلات الإنتاجية الحالية.`;
        textEn = `Technical Diagnosis: Outstanding performance (Healthy). Cost efficiency (${cpi.toFixed(2)}) and schedule velocity (${spi.toFixed(2)}) are exceeding targets, delivering a projected cost saving of ${formatCurrency(vac)} SAR. Recommendation: Maintain current subcontractor productivity.`;
    } else if (cpi < 1.0 && spi >= 1.0) {
        icon = 'fa-circle-exclamation text-warning';
        textAr = `التشخيص الفني: المشروع متقدم زمنياً (${spi.toFixed(2)}) ولكنه يعاني من تجاوز في التكاليف بمعدل (CPI = ${cpi.toFixed(2)}). التوصية: إجراء تدقيق فوري لمعدلات هوالك المواد وأسعار مقاولي الباطن والعمالة الإضافية (Overtime) لضبط الميزانية قبل انتهاء المشروع.`;
        textEn = `Technical Diagnosis: Ahead of schedule (${spi.toFixed(2)}) but experiencing cost overrun (CPI = ${cpi.toFixed(2)}). Recommendation: Immediately audit material scrap rates, overtime allowances, and subcontractor unit rates to recover budget equilibrium.`;
    } else if (cpi >= 1.0 && spi < 1.0) {
        icon = 'fa-clock text-warning';
        textAr = `التشخيص الفني: تكلفة المشروع منضبطة (CPI = ${cpi.toFixed(2)}) ولكن هناك تأخر في الجدول الزمني بمعدل (SPI = ${spi.toFixed(2)}). التوصية: إعادة فحص المسار الحرج (Critical Path)، زيادة أطقم العمل على الأنشطة الحرجة، وإصدار جدول استدراك زمني (Recovery Schedule).`;
        textEn = `Technical Diagnosis: Budget is well governed (CPI = ${cpi.toFixed(2)}) but critical milestone progress is behind (SPI = ${spi.toFixed(2)}). Recommendation: Re-evaluate the Critical Path Method (CPM), add targeted manpower on zero-float tasks, and submit a Recovery Schedule.`;
    } else {
        icon = 'fa-triangle-exclamation text-danger';
        textAr = `التشخيص الفني: تنبيه حرج (Double Deviation). المشروع متأخر زمنياً (SPI = ${spi.toFixed(2)}) وينفق بمعدل أعلى من القيمة المنجزة (CPI = ${cpi.toFixed(2)}) بعجز متوقع قدره ${formatCurrency(Math.abs(vac))} ريال. التوصية: تدخل فوري لعمل إعادة تقييم شاملة (Forensic Re-baseline & EOT Claim Audit).`;
        textEn = `Technical Diagnosis: Critical Dual-Variance Alert. Project is behind schedule (SPI = ${spi.toFixed(2)}) and over budget (CPI = ${cpi.toFixed(2)}) with a projected deficit of ${formatCurrency(Math.abs(vac))} SAR. Recommendation: Immediate executive intervention for Forensic Re-baseline and contractual review.`;
    }

    diagEl.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${lang === 'ar' ? textAr : textEn}</span>`;
}
