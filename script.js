/**
 * ==========================================
 * STATE-OF-THE-ART HEALTH PREDICTOR SCRIPT
 * ==========================================
 */

// --- TRANSLATION DICTIONARY ---
const TRANSLATIONS = {
    id: {
        appName: "AI Health Predictor",
        sdgTag: "SDG Poin 3: Kesehatan & Kesejahteraan",
        totalDiagnoses: "Total Diagnosis",
        highRiskCount: "Risiko Tinggi",
        ratioLabel: "Rasio Risiko",
        patientHistory: "Riwayat Pasien & Skor",
        noHistoryText: "Belum ada riwayat medis.",
        clearHistoryBtn: "Hapus Semua Riwayat",
        bmiCalculator: "Kalkulator Masa Tubuh (BMI)",
        heightLabel: "Tinggi Badan (cm)",
        weightLabel: "Berat Badan (kg)",
        calculateBmi: "Hitung BMI",
        patientDetailsTitle: "Form Input Klinis Pasien",
        patientDetailsDesc: "Gunakan data klinis terbaru untuk estimasi risiko kardiovaskular secara akurat.",
        labelLabel: "Nama Pasien",
        labelAge: "Usia Pasien",
        labelBp: "Tekanan Darah Sistolik",
        labelChol: "Kolesterol Total",
        labelSugar: "Kadar Gula Darah Puasa > 120 mg/dL?",
        labelPain: "Gejala Nyeri Dada (Angina)",
        selectPain0: "Tidak Ada Gejala / Normal",
        selectPain1: "Nyeri Ringan / Tidak Stabil",
        selectPain3: "Nyeri Akut / Sangat Kuat",
        selectSugarNo: "Tidak (Normal)",
        selectSugarYes: "Ya (> 120 mg/dL)",
        runAiBtn: "🔴 JALANKAN LOGIKA DETEKSI AI",
        analyzingClinicalData: "Menginisialisasi Jaringan AI...",
        readingVitals: "Mengindeks tanda vital klinis...",
        runningRules: "Mengevaluasi variabel Decision Tree...",
        generatingReport: "Menyusun lembar laporan diagnosis...",
        resultTitle: "Laporan Estimasi Jantung AI",
        reasonsTitle: "⚠️ Faktor Risiko Spesifik",
        recommendationsTitle: "🩺 Rencana Aksi Klinis",
        downloadReportBtn: "Cetak Laporan Medis",
        runNewBtn: "Analisis Ulang / Reset",
        toastSave: "Hasil diagnosis berhasil disimpan!",
        toastClear: "Seluruh catatan riwayat telah dibersihkan.",
        bmiNormal: "Ideal / Normal",
        bmiUnder: "Kurang Berat Badan",
        bmiOver: "Kelebihan Berat Badan",
        bmiObese: "Obesitas",
        normalIndicator: "Optimal",
        elevatedIndicator: "Elevated",
        highIndicator: "Tinggi",
        youngIndicator: "Muda",
        middleIndicator: "Paruh Baya",
        seniorIndicator: "Senior",
        highRiskText: "RISIKO TINGGI",
        lowRiskText: "RISIKO RENDAH",
        riskDescDanger: "Pola deteksi AI menunjukkan kecenderungan anomali kardiovaskular.",
        riskDescSuccess: "Evaluasi klinis menunjukkan performa jantung dalam rentang optimal.",
        recFood: "Batasi konsumsi asam lemak jenuh tinggi, natrium (garam) berlebih, dan gula tambahan.",
        recDr: "Dijadwalkan konsultasi dokter spesialis patologi jantung beserta Elektrokardiogram (EKG).",
        recBp: "Monitoring reguler tekanan sistolik setiap sore hari dan catat perkembangannya.",
        recExercise: "Pertahankan aktivitas kardio ringan minimal 150 menit per minggu.",
        recSmoke: "Hindari paparan asap rokok aktif maupun pasif untuk mengontrol stres oksidatif seluler.",
        recCheckup: "Melakukan check-up profil lipid terpadu secara rutin minimal 1 tahun sekali.",

        // SDG Card Translations
        sdgCardTitle: "SDG 3: Kehidupan Sehat dan Sejahtera",
        sdgCardDesc: "Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan seluruh penduduk semua usia.",
        sdgTargetHeader: "Target 3.4 — Penyakit tidak menular & Kesehatan mental",
        sdgTargetMain: "Mengurangi sepertiga dari kematian prematur yang disebabkan oleh penyakit tidak menular (seperti serangan jantung, diabetes, hipertensi) melalui pencegahan dan pengobatan serta mempromosikan kesehatan mental pada tahun 2030.",
        sdgDetTitle: "Sistem Deteksi Dini & Preventif",
        sdgDetDesc: "Mengimplementasikan teknologi deteksi dini berkemampuan komputasi AI membantu masyarakat memahami status kesehatan kardiovaskular secara personal sebelum terjadi komplikasi kritis.",
        themeLight: "Terang",
        themeDark: "Gelap"
    },
    en: {
        appName: "AI Health Predictor",
        sdgTag: "SDG Goal 3: Good Health & Well-being",
        totalDiagnoses: "Total Diagnoses",
        highRiskCount: "High Risk Cases",
        ratioLabel: "Risk Ratio",
        patientHistory: "Patient History & Score",
        noHistoryText: "No medical history recorded yet.",
        clearHistoryBtn: "Clear History Logs",
        bmiCalculator: "Interactive Body Mass Index",
        heightLabel: "Height (cm)",
        weightLabel: "Weight (kg)",
        calculateBmi: "Calculate BMI",
        patientDetailsTitle: "Clinical Patient Inputs",
        patientDetailsDesc: "Fill in recent diagnostic stats to evaluate cardiac and vascular risk patterns.",
        labelLabel: "Patient Name",
        labelAge: "Patient Age",
        labelBp: "Systolic Blood Pressure",
        labelChol: "Total Serum Cholesterol",
        labelSugar: "Fasting Blood Sugar > 120 mg/dL?",
        labelPain: "Chest Pain Category (Angina)",
        selectPain0: "No Chest Pain / Asymptomatic",
        selectPain1: "Mild Angina / Unstable Pressure",
        selectPain3: "Severe / Acute Crushing Pain",
        selectSugarNo: "No (Normal Blood Sugar)",
        selectSugarYes: "Yes (> 120 mg/dL)",
        runAiBtn: "🔴 RUN AI PREDICTION RULES",
        analyzingClinicalData: "Initializing Decision Tree Networks...",
        readingVitals: "Validating clinical vitals and bounds...",
        runningRules: "Evaluating model weights...",
        generatingReport: "Generating diagnosis report card...",
        resultTitle: "AI Cardiac Evaluation Sheet",
        reasonsTitle: "⚠️ Flagged Clinical Variables",
        recommendationsTitle: "🩺 SDG 3 Guided Clinical Directives",
        downloadReportBtn: "Print Clinical Report",
        runNewBtn: "Restart Assessment",
        toastSave: "Diagnostic results logged successfully!",
        toastClear: "All history logs have been cleared.",
        bmiNormal: "Healthy / Normal Weight",
        bmiUnder: "Underweight Range",
        bmiOver: "Overweight Range",
        bmiObese: "Obesity Class Range",
        normalIndicator: "Optimal",
        elevatedIndicator: "Elevated",
        highIndicator: "High",
        youngIndicator: "Young",
        middleIndicator: "Middle-Aged",
        seniorIndicator: "Senior",
        highRiskText: "HIGH RISK PROFILE",
        lowRiskText: "LOW RISK / HEALTHEST",
        riskDescDanger: "The diagnostic pattern shows significant risks matching cardiovascular anomalies.",
        riskDescSuccess: "The cardiovascular parameters are well within standard healthy baselines.",
        recFood: "Limit menus containing trans-fats, deep refined oils, sodium, and direct sugars.",
        recDr: "Schedule a medical review with a cardiologist along with an ECG diagnostic run.",
        recBp: "Record blood pressure daily under standardized resting conditions.",
        recExercise: "Keep engaging in aerobic activity (e.g. brisk walking) at least 150 min/week.",
        recSmoke: "Maintain absolute zero smoking habits to prevent structural vessel calcifications.",
        recCheckup: "Complete annual metabolic profiles including fasting sugar and lipid panels.",

        // SDG Card Translations
        sdgCardTitle: "SDG 3: Good Health and Well-being",
        sdgCardDesc: "Ensure healthy lives and promote well-being for all at all ages.",
        sdgTargetHeader: "Target 3.4 — Non-communicable diseases & Mental health",
        sdgTargetMain: "By 2030, reduce by one third premature mortality from non-communicable diseases (such as heart disease, diabetes, hypertension) through prevention and treatment and promote mental health and well-being.",
        sdgDetTitle: "Early Detection & Preventive Systems",
        sdgDetDesc: "Implementing predictive AI systems helps citizens trace cardiovascular vulnerabilities individually before critical complications occur.",
        themeLight: "Light",
        themeDark: "Dark"
    }
};

let currentLang = 'id';
let database = [];
let activeRecordId = null;

// --- BOOTSTRAP SYSTEM ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. LocalStorage Retrieval
    const loadedData = localStorage.getItem('sdg3_health_history');
    if (loadedData) {
        database = JSON.parse(loadedData);
    }

    // 2. Load preferred theme
    const savedTheme = localStorage.getItem('sdg3_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonIcon(savedTheme);

    // 3. Initialize Live Input Handlers
    initLiveInputs();

    // 4. Update Stats & History Lists
    updateDashboard();

    // 5. Load default language UI
    switchLanguage(currentLang);
});

// --- THEME CONTROL ---
function toggleTheme() {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sdg3_theme', newTheme);
    updateThemeButtonIcon(newTheme);
}

function updateThemeButtonIcon(theme) {
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark'
            ? '☀️ <span data-lang-key="themeLight">Light</span>'
            : '🌙 <span data-lang-key="themeDark">Dark</span>';

        // Re-run switch language to update the text labels inside button
        const textSpan = themeBtn.querySelector('span');
        if (textSpan) {
            textSpan.textContent = theme === 'dark'
                ? (currentLang === 'id' ? 'Terang' : 'Light')
                : (currentLang === 'id' ? 'Gelap' : 'Dark');
        }
    }
}

// --- LANGUAGE SWITCH ---
function toggleLanguage() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    switchLanguage(currentLang);

    // Toast notification
    showToast(currentLang === 'id' ? 'Bahasa disetel: Indonesia' : 'Language set: English');
}

function switchLanguage(lang) {
    const dict = TRANSLATIONS[lang];

    // Update texts with corresponding data-lang-key properties
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update form input placeholders if necessary
    const namaInput = document.getElementById('nama');
    if (namaInput) {
        namaInput.placeholder = lang === 'id' ? 'Contoh: Budi Santoso' : 'e.g. John Doe';
    }

    // Dynamic Select Options text update
    updateSelectOptionTexts(lang);

    // Theme toggle text refresh
    const activeTheme = document.documentElement.getAttribute('data-theme');
    updateThemeButtonIcon(activeTheme);

    // Refresh active report if it is currently displayed
    if (activeRecordId) {
        const record = database.find(item => item.id === activeRecordId);
        if (record) {
            renderResultDom(record);
        }
    }

    // Refresh gauges and reports
    refreshLiveIndicators();
    updateDashboard();
}

function updateSelectOptionTexts(lang) {
    const dict = TRANSLATIONS[lang];

    const optPain0 = document.getElementById('optPain0');
    const optPain1 = document.getElementById('optPain1');
    const optPain3 = document.getElementById('optPain3');
    const optSugarNo = document.getElementById('optSugarNo');
    const optSugarYes = document.getElementById('optSugarYes');

    if (optPain0) optPain0.textContent = dict.selectPain0;
    if (optPain1) optPain1.textContent = dict.selectPain1;
    if (optPain3) optPain3.textContent = dict.selectPain3;
    if (optSugarNo) optSugarNo.textContent = dict.selectSugarNo;
    if (optSugarYes) optSugarYes.textContent = dict.selectSugarYes;
}

// --- TOAST SYSTEMS ---
function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast toast-success';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `🧬 <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// --- LIVE GAUGES / BINDINGS ---
function initLiveInputs() {
    // Usia indicator
    const usiaInput = document.getElementById('usia');
    if (usiaInput) {
        usiaInput.addEventListener('input', () => updateUsiaIndicator(usiaInput.value));
        updateUsiaIndicator(usiaInput.value);
    }

    // Blood Pressure indicator
    const bpInput = document.getElementById('tekananDarah');
    if (bpInput) {
        bpInput.addEventListener('input', () => updateBpIndicator(bpInput.value));
        updateBpIndicator(bpInput.value);
    }

    // Cholesterol indicator
    const cholInput = document.getElementById('kolesterol');
    if (cholInput) {
        cholInput.addEventListener('input', () => updateCholIndicator(cholInput.value));
        updateCholIndicator(cholInput.value);
    }
}

function refreshLiveIndicators() {
    const usiaInput = document.getElementById('usia');
    const bpInput = document.getElementById('tekananDarah');
    const cholInput = document.getElementById('kolesterol');

    if (usiaInput) updateUsiaIndicator(usiaInput.value);
    if (bpInput) updateBpIndicator(bpInput.value);
    if (cholInput) updateCholIndicator(cholInput.value);
}

function updateUsiaIndicator(val) {
    const valInt = parseInt(val) || 0;
    const badge = document.getElementById('indicatorUsia');
    if (!badge) return;

    badge.className = 'input-indicator';
    const dict = TRANSLATIONS[currentLang];

    if (valInt < 35) {
        badge.textContent = dict.youngIndicator;
        badge.classList.add('indicator-optimal');
    } else if (valInt <= 55) {
        badge.textContent = dict.middleIndicator;
        badge.classList.add('indicator-elevated');
    } else {
        badge.textContent = dict.seniorIndicator;
        badge.classList.add('indicator-high');
    }
}

function updateBpIndicator(val) {
    const valInt = parseInt(val) || 0;
    const badge = document.getElementById('indicatorBp');
    if (!badge) return;

    badge.className = 'input-indicator';
    const dict = TRANSLATIONS[currentLang];

    if (valInt <= 120) {
        badge.textContent = `${dict.normalIndicator} (Normal)`;
        badge.classList.add('indicator-optimal');
    } else if (valInt <= 139) {
        badge.textContent = `${dict.elevatedIndicator} (Pre-HT)`;
        badge.classList.add('indicator-elevated');
    } else {
        badge.textContent = `${dict.highIndicator} (Hipertensi)`;
        badge.classList.add('indicator-high');
    }
}

function updateCholIndicator(val) {
    const valInt = parseInt(val) || 0;
    const badge = document.getElementById('indicatorChol');
    if (!badge) return;

    badge.className = 'input-indicator';
    const dict = TRANSLATIONS[currentLang];

    if (valInt <= 200) {
        badge.textContent = dict.normalIndicator;
        badge.classList.add('indicator-optimal');
    } else if (valInt <= 239) {
        badge.textContent = dict.elevatedIndicator;
        badge.classList.add('indicator-elevated');
    } else {
        badge.textContent = dict.highIndicator;
        badge.classList.add('indicator-high');
    }
}

// --- BMI CALCULATOR ---
function hitungBmi() {
    const height = parseFloat(document.getElementById('bmiTinggi').value) / 100;
    const weight = parseFloat(document.getElementById('bmiBerat').value);
    const wrapper = document.getElementById('bmiResult');

    if (!height || !weight || height <= 0 || weight <= 0) {
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';
    let categoryClass = '';
    const dict = TRANSLATIONS[currentLang];

    if (bmi < 18.5) {
        category = dict.bmiUnder;
        categoryClass = 'danger-text';
    } else if (bmi < 24.9) {
        category = dict.bmiNormal;
        categoryClass = 'success-text';
    } else if (bmi < 29.9) {
        category = dict.bmiOver;
        categoryClass = 'warning-text';
    } else {
        category = dict.bmiObese;
        categoryClass = 'danger-text';
    }

    wrapper.style.display = 'block';

    // Animate rendering
    wrapper.innerHTML = `
        <span style="font-weight: 800; font-size: 15px;">BMI: ${bmi}</span>
        <div class="${categoryClass}" style="font-weight: 700; margin-top: 4px;">${category}</div>
    `;
}

// --- DASHBOARD UPDATER ---
function updateDashboard() {
    const totalCountVal = document.getElementById('totalCount');
    const highRiskVal = document.getElementById('highRiskCount');
    const riskRatioVal = document.getElementById('riskRatio');
    const historyList = document.getElementById('historyList');

    const total = database.length;
    const highRisk = database.filter(item => item.skor >= 5).length;
    const ratio = total > 0 ? Math.round((highRisk / total) * 100) : 0;

    if (totalCountVal) totalCountVal.textContent = total;
    if (highRiskVal) highRiskVal.textContent = highRisk;
    if (riskRatioVal) riskRatioVal.textContent = ratio + '%';

    // Refresh history dom list
    if (historyList) {
        historyList.innerHTML = '';
        if (database.length === 0) {
            historyList.innerHTML = `<p class="no-history" data-lang-key="noHistoryText">${TRANSLATIONS[currentLang].noHistoryText}</p>`;
            return;
        }

        // Show items in reverse order (newest first)
        const reverseData = [...database].reverse();
        reverseData.forEach(item => {
            const isHigh = item.skor >= 5;
            const borderClass = isHigh ? 'danger-border' : 'success-border';

            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${borderClass}`;
            historyItem.onclick = () => loadHistoricalRecord(item.id);

            historyItem.innerHTML = `
                <div class="history-info">
                    <span class="history-name">${escapeHTML(item.nama)}</span>
                    <span class="history-meta">${item.usia} Thn · ${isHigh ? 'High Risk' : 'Low Risk'}</span>
                </div>
                <button class="btn-delete-history" onclick="deleteRecord(event, '${item.id}')" title="Delete">✕</button>
            `;
            historyList.appendChild(historyItem);
        });
    }
}

// --- SAVE RECORD ---
function saveHistoryItem(record) {
    database.push(record);
    localStorage.setItem('sdg3_health_history', JSON.stringify(database));
    updateDashboard();
}

function deleteRecord(event, id) {
    event.stopPropagation(); // Prevent loading detail when clicking delete button
    database = database.filter(item => item.id !== id);
    localStorage.setItem('sdg3_health_history', JSON.stringify(database));

    if (activeRecordId === id) {
        activeRecordId = null;
        document.getElementById('resultCard').style.display = 'none';
    }

    const dict = TRANSLATIONS[currentLang];
    showToast(dict.toastClear);
    updateDashboard();
}

function clearAllHistory() {
    database = [];
    activeRecordId = null;
    localStorage.removeItem('sdg3_health_history');

    const resultCard = document.getElementById('resultCard');
    if (resultCard) resultCard.style.display = 'none';

    const dict = TRANSLATIONS[currentLang];
    showToast(dict.toastClear);
    updateDashboard();
}

// --- RUN PREDICTION LOGIC ---
function runAiPredictor(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim() || "Anonym";
    const usia = parseInt(document.getElementById('usia').value) || 40;
    const bp = parseInt(document.getElementById('tekananDarah').value) || 120;
    const chol = parseInt(document.getElementById('kolesterol').value) || 200;
    const sugar = document.getElementById('gulaDarah').value;
    const pain = parseInt(document.getElementById('nyeriDada').value) || 0;

    // Show AI simulation progress steps
    const loader = document.getElementById('neuralLoader');
    const resultCard = document.getElementById('resultCard');
    const submitBtn = document.getElementById('submitBtn');

    if (loader) loader.style.display = 'block';
    if (resultCard) resultCard.style.display = 'none';
    if (submitBtn) submitBtn.style.disabled = true;

    const dict = TRANSLATIONS[currentLang];
    const loadingSubText = document.getElementById('loadingSubText');
    const loadingMainText = document.getElementById('loadingMainText');

    if (loadingMainText) loadingMainText.textContent = dict.analyzingClinicalData;

    // Simulate multi-stage AI reasoning steps
    setTimeout(() => {
        if (loadingSubText) loadingSubText.textContent = dict.readingVitals;
        setTimeout(() => {
            if (loadingSubText) loadingSubText.textContent = dict.runningRules;
            setTimeout(() => {
                if (loadingSubText) loadingSubText.textContent = dict.generatingReport;
                setTimeout(() => {
                    executeEvaluation(nama, usia, bp, chol, sugar, pain);
                }, 600);
            }, 600);
        }, 600);
    }, 300);
}

// Draw the dynamic Risk Meter using SVG
function drawRiskMeterGauge(score) {
    const riskPercentage = Math.min(100, Math.max(10, Math.round((score / 10) * 100)));
    const path = document.getElementById('riskMeterArc');
    if (!path) return;

    // SVG arc details: Radius 50, Center (60,60). Arc length is PI*R ~ 157.
    // Stroke-dasharray reflects this base size.
    // 0% risk -> dashoffset = 157. 100% risk -> dashoffset = 0.
    const maxArcLength = 157;
    const dashoffset = maxArcLength - (maxArcLength * (riskPercentage / 100));

    path.style.strokeDashoffset = dashoffset;

    // Set color based on risk intensity
    if (score >= 5) {
        path.style.stroke = 'var(--danger)';
    } else if (score >= 3) {
        path.style.stroke = 'var(--warning)';
    } else {
        path.style.stroke = 'var(--success)';
    }

    const percentageText = document.getElementById('riskPercentageText');
    if (percentageText) {
        percentageText.textContent = riskPercentage + '%';
        if (score >= 5) {
            percentageText.style.color = 'var(--danger-text)';
        } else if (score >= 3) {
            percentageText.style.color = 'var(--warning-text)';
        } else {
            percentageText.style.color = 'var(--success-text)';
        }
    }
}

function executeEvaluation(nama, usia, bp, chol, sugar, pain) {
    const loader = document.getElementById('neuralLoader');
    const resultCard = document.getElementById('resultCard');
    const submitBtn = document.getElementById('submitBtn');

    if (loader) loader.style.display = 'none';
    if (resultCard) resultCard.style.display = 'block';
    if (submitBtn) submitBtn.style.disabled = false;

    // AI score formulation
    let score = 0;
    if (usia > 50) score += 2;
    if (bp > 140) score += 2;
    else if (bp > 120) score += 1;

    if (chol > 240) score += 2;
    else if (chol > 200) score += 1;

    if (sugar === 'ya') score += 1;
    if (pain > 0) score += pain;

    // Save record to local memory
    const record = {
        id: 'rec-' + Date.now(),
        nama: nama,
        usia: usia,
        bp: bp,
        chol: chol,
        sugar: sugar,
        pain: pain,
        skor: score,
        danger: score >= 5,
        timestamp: Date.now()
    };

    activeRecordId = record.id;
    saveHistoryItem(record);

    const dict = TRANSLATIONS[currentLang];
    showToast(dict.toastSave);

    // Display results in DOM
    renderResultDom(record);
}

function renderResultDom(record) {
    const dict = TRANSLATIONS[currentLang];

    // 1. Heading Details
    const ptNameLabel = document.getElementById('ptReportName');
    const ptMetaLabel = document.getElementById('ptReportMeta');

    if (ptNameLabel) ptNameLabel.textContent = record.nama;
    if (ptMetaLabel) {
        const formattedDate = new Date(record.timestamp).toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        ptMetaLabel.textContent = currentLang === 'id'
            ? `Usia: ${record.usia} tahun · Diagnosis Tanggal: ${formattedDate}`
            : `Age: ${record.usia} yrs · Diagnosis Date: ${formattedDate}`;
    }

    // 2. Risk status badge
    const badge = document.getElementById('resultBadge');
    const descText = document.getElementById('resultDescText');

    if (badge) {
        badge.className = record.danger ? 'result-badge badge-danger' : 'result-badge badge-success';
        badge.innerHTML = record.danger
            ? `🛑 <span>${dict.highRiskText}</span>`
            : `❇️ <span>${dict.lowRiskText}</span>`;
    }

    if (descText) {
        descText.textContent = record.danger ? dict.riskDescDanger : dict.riskDescSuccess;
    }

    // 3. Render Risk Gauge Arc
    drawRiskMeterGauge(record.skor);

    // 4. Dynamically compute Flagged factors in user's active language
    const flaggedList = [];
    if (record.usia > 50) {
        flaggedList.push(currentLang === 'id'
            ? `Faktor Usia (${record.usia} Tahun) berpotensi memicu degenerasi pembuluh darah (+2)`
            : `Age Factor (${record.usia} Years Old) is linked to potential vascular degeneration (+2)`);
    }
    if (record.bp > 140) {
        flaggedList.push(currentLang === 'id'
            ? `Tekanan Darah Sistolik tinggi (${record.bp} mmHg) membebani dinding arteri (+2)`
            : `High Systolic Blood Pressure (${record.bp} mmHg) stresses arterial walls (+2)`);
    } else if (record.bp > 120) {
        flaggedList.push(currentLang === 'id'
            ? `Tekanan Darah Sistolik terdeteksi Pra-Hipertensi (${record.bp} mmHg) (+1)`
            : `Systolic Blood Pressure detected as Pre-Hypertension (${record.bp} mmHg) (+1)`);
    }
    if (record.chol > 240) {
        flaggedList.push(currentLang === 'id'
            ? `Kolesterol Serum Tinggi (${record.chol} mg/dL) memicu risiko plak aterosklerosis (+2)`
            : `High Serum Cholesterol (${record.chol} mg/dL) risks plaque atherogenesis (+2)`);
    } else if (record.chol > 200) {
        flaggedList.push(currentLang === 'id'
            ? `Rentang Kolesterol Borderline (${record.chol} mg/dL) (+1)`
            : `Borderline cholesterol level (${record.chol} mg/dL) (+1)`);
    }
    if (record.sugar === 'ya') {
        flaggedList.push(currentLang === 'id'
            ? `Kadar Gula Darah Puasa > 120 mg/dL memicu glikasi protein (+1)`
            : `Fasting blood sugar > 120 mg/dL triggers protein glycation risk (+1)`);
    }
    if (record.pain > 0) {
        flaggedList.push(currentLang === 'id'
            ? `Gejala Nyeri Dada Klinis terdeteksi (+${record.pain})`
            : `Clinical Angina pain symptomatology detected (+${record.pain})`);
    }

    // 5. Render Flags Lister
    const flagsList = document.getElementById('riskReasonsList');
    if (flagsList) {
        flagsList.innerHTML = '';
        if (flaggedList.length === 0) {
            const emptyLi = document.createElement('li');
            emptyLi.textContent = currentLang === 'id' ? 'Tidak ada faktor risiko ekstrim terdeteksi.' : 'No extreme health risk factor variables flagged.';
            flagsList.appendChild(emptyLi);
        } else {
            flaggedList.forEach(f => {
                const li = document.createElement('li');
                li.textContent = f;
                flagsList.appendChild(li);
            });
        }
    }

    // 6. Dynamically compile recommendations
    const recommendations = [];
    recommendations.push(dict.recFood);
    recommendations.push(dict.recSmoke);
    if (record.skor >= 5) {
        recommendations.push(dict.recDr);
        recommendations.push(dict.recBp);
    } else {
        recommendations.push(dict.recExercise);
        recommendations.push(dict.recCheckup);
    }

    // 7. Render Recs Lister
    const recsList = document.getElementById('recommendationsList');
    if (recsList) {
        recsList.innerHTML = '';
        recommendations.forEach(r => {
            const li = document.createElement('li');
            li.textContent = r;
            recsList.appendChild(li);
        });
    }

    // Scroll smoothly to results card
    const resultCard = document.getElementById('resultCard');
    if (resultCard) {
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- HISTORICAL RECORD RETRIEVAL ---
function loadHistoricalRecord(recordId) {
    const record = database.find(item => item.id === recordId);
    if (!record) return;

    activeRecordId = record.id;

    // Load inputs back into the form fields
    document.getElementById('nama').value = record.nama;
    document.getElementById('usia').value = record.usia;
    document.getElementById('tekananDarah').value = record.bp;
    document.getElementById('kolesterol').value = record.chol;
    document.getElementById('gulaDarah').value = record.sugar;
    document.getElementById('nyeriDada').value = record.pain;

    // Trigger gauge updates
    refreshLiveIndicators();

    // Directly display the historical card
    const resultCard = document.getElementById('resultCard');
    if (resultCard) resultCard.style.display = 'block';

    renderResultDom(record);
}

// --- UTILS ---
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

function restartPredictor() {
    activeRecordId = null;
    document.getElementById('healthForm').reset();
    const resultCard = document.getElementById('resultCard');
    if (resultCard) resultCard.style.display = 'none';

    // Refresh live widgets
    refreshLiveIndicators();
}

function printClinicalReport() {
    window.print();
}