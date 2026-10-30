/**
 * ENG. WAEL MOHAMED ERAQY - PORTFOLIO ENGINE
 * Main JavaScript Controller: Bilingual i18n, Filtering, Lightbox, Pillars & Navigation
 * Technical Office Manager & Project Controls & Data Analysis
 */

// Bilingual Translation Dictionary
const translations = {
    ar: {
        topbar_status: "مقيم في مصر والعمل الأساسي من مصر (حتى مع إدارة مشاريع بالسعودية)، مع إتاحة الانتقال الفوري لأي دولة عربية أو العمل كـ Freelance",
        nda_notice: "النسخة مهيأة للنشر العام ومطابقة للسرية (NDA Compliant)",
        brand_name: "م. وائل محمد عراقي",
        brand_title: "Technical Office Manager & Project Controls & Data Analysis",
        nav_about: "نبذة مهنية",
        nav_pillars: "الركائز الأساسية",
        nav_cost_control: "التحكم في التكاليف و EVM",
        nav_projects: "المشاريع الكبرى",
        nav_automation: "البيانات والأتمتة",
        nav_tools: "الأدوات والأنظمة",
        nav_contact: "تواصل معي",
        download_cv: "تحميل الـ CV",
        
        // Hero
        hero_badge: "مهندس مدني • خبرة 12+ عاماً • إدارة من مصر لمشاريع مصر والمملكة العربية السعودية",
        hero_title: 'قيادة المشروعات الهندسية عبر <span class="gradient-text">التحكم الصارم في التكاليف</span> والتخطيط الاستراتيجي وذكاء البيانات',
        hero_subtitle: "Technical Office Manager & Project Controls & Data Analysis Engineer. خبرة متقدمة في دورة المكتب الفني الكاملة، بناء خطوط الأساس في Primavera P6، نماذج Budget Zero، إدارة القيمة المكتسبة (EVM)، مستودعات البيانات ونماذج Power BI المتقدمة عبر Python و SQL Server، والأتمتة الذكية عبر n8n للربط بين الموقع والإدارة.",
        hero_cta_projects: "المشاريع الكبرى (مستشفيات وفنادق)",
        hero_cta_cv: "السيرة الذاتية الرسمية",
        hero_cta_whatsapp: "محادثة واتساب مباشرة",
        metric_exp: "سنوات خبرة هندسية متخصصة",
        metric_ksa: "مشروعات طبية ومستشفيات بالسعودية",
        metric_compound: "مشروع كمبوند بالعاصمة الإدارية",
        metric_portfolio: "محفظة مشروعات شركة دليل الهدى",
        click_enlarge: "انقر للتكبير والفحص",

        // About
        about_tag: "الملف التعريفي",
        about_title: "خبرة هندسية تجمع بين الصرامة الميدانية وحلول ذكاء البيانات",
        about_profile_heading: "منهجية العمل والقيادة",
        about_profile_desc: "مهندس مدني خريج كلية الهندسة جامعة الفيوم (2014) بخبرة تتجاوز 12 عاماً، أعمل وأقيم بشكل أساسي في مصر، وأقود من خلال مكتبي الفني إدارة وضبط المشروعات الكبرى محلياً وفي المملكة العربية السعودية، مع كامل الجاهزية والاستعداد للانتقال الفوري للعمل الميداني في أي دولة عربية أو التعاقد عن بعد بنظام الاستشارات والعمل الحر (Freelance).",
        about_profile_desc_2: "أقود الدورة الهندسية المتكاملة بدءاً من دراسة المقايسة واعتمادها كإجمالي للعقد، وإعداد واعتماد المخططات التنفيذية (Shop Drawings) للمشروعات الطبية والسكنية والفندقية المعقدة، وحصر الكميات بدقة، وتقديم الاعتمادات الفنية للمواد، وصولاً إلى بناء خطوط الأساس (Baselines) وتطبيق معايير إدارة القيمة المكتسبة (EVM).",
        about_synergy_heading: "التميز التنافسي: دمج الهندسة بالبيانات",
        about_synergy_desc: "أقدم نموذجاً هندسياً يدمج الركائز الأربع: إدارة المكتب الفني، التخطيط الزمني الصارم، حوكمة التكاليف، والتحليل المتقدم للبيانات عبر Power BI, DAX, Python, SQL Server, و n8n Automation.",
        about_synergy_desc_2: "هذا التكامل يسد الفجوة بين الموقع والإدارة المالية، ويحول أرقام المقايسات والمستخلصات اليومية إلى رؤى استباقية تحمي هوامش الأرباح وتكشف فجوات التكلفة ومعدلات استهلاك المواد قبل حدوث العجز.",
        comp_1: "إدارة مشاريع طبية معقدة (مستشفيات أورام ومراكز رعاية تخصصية بالسعودية)",
        comp_2: "إدارة تنفيذ كمبوند وفنادق كبرى بالعاصمة الإدارية والغردقة",
        comp_3: "بناء نماذج Budget Zero، خطط التكاليف غير المباشرة، وحصر الكميات الشامل",

        // Core Pillars
        pillars_tag: "المنظومة الهندسية المتكاملة",
        pillars_title: "الركائز الأساسية لإدارة وضبط المشروعات",
        pillars_subtitle: "تفاصيل موسعة ومبنية على مستندات وبيانات المشاريع الحقيقية المنفذة في مصر والسعودية عبر الركائز الأربع الرئيسية:",
        p_tab_cost: "1. التحكم في التكاليف و EVM",
        p_tab_plan: "2. التخطيط والمتابعة (P6 & MS Project)",
        p_tab_tech: "3. المكتب الفني وحصر الكميات",
        p_tab_bi: "4. ذكاء الأعمال والأتمتة (BI, Python, SQL, n8n)",
        cost_p_title: "التحكم في التكاليف وحوكمة الميزانيات (Cost Control)",
        cost_p_desc: "منهجية دقيقة تبدأ من تفكيك مقايسة المشروع وبناء ميزانية الصفر (Budget Zero)، وفصل التكاليف المباشرة عن غير المباشرة، مع التوزيع الزمني الدقيق (Time-Phasing) لكافة بنود المصروفات والإشراف والمعدات.",
        plan_p_title: "التخطيط والبرمجة الزمنية وتوظيف ورقة الربط (Mapping Sheet)",
        plan_p_desc: "منهجية متكاملة لتحويل مستندات المشروع إلى خطط زمنية احترافية معتمدة. يعتمد أسلوبي على بناء ورقة الربط الهندسية (Mapping Sheet)، وهي أداة إكسل متقدمة تربط بنود المقايسة (BOQ) بهيكل تجزئة العمل (WBS) ومصفوفة الموارد والأكواد، مما يسهل المراجعة الحسابية والتصدير المباشر والسلس إلى برامج Primavera P6 و Microsoft Project.",
        tech_p_title: "دورة عمل المكتب الفني الشاملة وحصر الكميات",
        bi_p_title: "ذكاء الأعمال وأتمتة التقارير (Power BI, DAX, Python, SQL Server & n8n)",
        bi_p_desc: "التحول الرقمي الكامل في إدارة المشروعات عبر التوظيف المتقدم لـ Python و SQL Server بجانب Power BI و n8n Automation:",

        // Cost Control Hub
        cc_hub_tag: "منظومة هندسة التحكم في التكاليف",
        cc_hub_title: "منهجية التحكم في التكاليف وإدارة القيمة المكتسبة (EVM System)",
        cc_hub_subtitle: "نظرة هندسية معمقة على كيفية تحويل بنود المقايسات والعقود إلى منظومة حية ترصد التكاليف المباشرة وغير المباشرة، وتراقب استهلاك المواد، وتتنبأ بالانحرافات قبل وقوعها.",
        cc_flow_title: "دورة حوكمة التكاليف المتكاملة (6-Step Cost Governance Cycle)",
        step1_h: "فحص العقد والمقايسة",
        step1_p: "مراجعة شاملة لجدول الكميات، مطابقة الأسعار التقديرية بالواقع السوقي، وتحديد بنود المخاطر.",
        step2_h: "ميزانية الصفر (Budget Zero)",
        step2_p: "تحديد تكاليف التنفيذ الحقيقية لكل بند وفصل التكاليف المباشرة عن التكاليف الإدارية وغير المباشرة.",
        step3_h: "أكواد التكلفة (CA-Codes)",
        step3_p: "إنشاء شجرة أكواد محاسبية وهندسية لربط المشتريات ومقاولي الباطن والعمالة بحزم العمل.",
        step4_h: "نموذج بيانات Power BI",
        step4_p: "بناء Star-Schema data model يربط الفواتير والكميات وجدول P6 الزمني بقواعد بيانات موحدة.",
        step5_h: "رصد الهوالك والمستخلصات",
        step5_p: "حساب معدلات استهلاك المواد (المخطط vs الفعلي) والتدقيق الدوري لمستخلصات مقاولي الباطن.",
        step6_h: "التنبؤ المالي (EAC & GP%)",
        step6_p: "تحديث مؤشرات EVM شهرياً وتقدير التكلفة الإجمالية عند النهاية وحماية هامش الربح التشغيلي.",

        // Simulator
        sim_heading: "محاكي إدارة القيمة المكتسبة التفاعلي (Interactive EVM Calculator)",
        sim_sub: "قم بتغيير قيم المشروع أدناه لتجربة حساب مؤشرات الأداء الحقيقي (CPI / SPI / EAC / VAC) لحظياً:",
        sim_live_math: "حسابات هندسية مطابقة لمعايير PMI & AACE",
        lbl_bac: "الميزانية الإجمالية المعتمدة (BAC)",
        lbl_planned: "% الإنجاز المخطط طبقاً لـ P6 (Planned %)",
        lbl_actual_prog: "% الإنجاز الفعلي المنفذ (Earned %)",
        lbl_ac: "التكلفة الفعلية المنصرفة حتى تاريخه (AC)",
        presets_label: "سيناريوهات جاهزة:",
        preset_healthy: "مشروع منضبط (Healthy)",
        preset_cost: "تجاوز تكلفة (Cost Overrun)",
        preset_delay: "تأخر زمني (Behind Schedule)",
        diag_warning: "التشخيص الفني: المشروع ينفق أكثر من القيمة المنجزة بمعدل (CPI = 0.93). التوصية: تدقيق فوري لمستخلصات مقاولي الباطن ونسب استهلاك المواد لضبط التكلفة قبل اكتمال المشروع.",

        // Tabs
        cc_evidence_title: "أدلة عملية من لوحات التحكم والنماذج المطبقة فعلياً",
        tab_schema: "هندسة بيانات Star-Schema",
        tab_wastage: "تحليل هوالك المواد والمخازن",
        tab_rates: "تحليل أسعار البنود (Unit Rates)",
        tab_profit: "تطور هامش الربح (Gross Profit)",
        tab_cashflow: "التدفقات النقدية والعمالة",
        schema_heading: "بناء نموذج بيانات متكامل (Star-Schema Data Model)",
        schema_desc: "نموذج بيانات حقيقي تم تصميمه وربطه في Power BI لمتابعة مشروع مستشفى بالرياض بقيمة 35 مليون ريال. يقوم النموذج على جداول حقائق (Fact Tables) متصلة بجداول أبعاد (Dimensions) عبر جداول جسور (Bridge Tables) لمقاولي الباطن والمواد والعمالة المباشرة والتكاليف الإدارية (Indirects).",
        view_full_schema: "عرض المخطط بالحجم الكامل",
        caption_schema: "مخطط علاقات الجداول والجسور في Power BI للتحكم في التكاليف",
        wastage_heading: "مراقبة هوالك المواد الموقعية وتحليل المخزون",
        wastage_desc: "لوحة تحكم تفاعلية تحسب الهالك الميداني مقارنة بالهالك المسموح به تعاقدياً (Tender Allowance). يتم رصد المواد الأساسية (الأسمنت، الرمل، ألواح الجبس، مواد اللصق، الفينيل الطبي) وحساب الفروقات المالية المترتبة على أي زيادة في الاستهلاك.",
        caption_wastage: "لوحة رصد الهوالك وتحليل أرصدة المخازن لمشروع المستشفى",
        porcelain_heading: "تحليل تكلفة البنود التفصيلية (Unit Rate vs Budget)",
        porcelain_desc: "تفكيك تكلفة المتر المسطح للأعمال التخصصية (أعمال البورسلين والأرضيات والجدران) إلى مكوناتها الأساسية: المواد (64%)، مقاولو الباطن (34%)، والعمالة المباشرة (2%).",
        porcelain_desc_2: "يوضح التحليل تحقيق وفر سعري في تكلفة المتر المربع الفعلي (195 ر.س مقابل ميزانية تقديرية 930 ر.س) من خلال التفاوض الذكي على عقود التوريد والتركيب، مما وفر نسبة ربح استثنائية لحزمة الأعمال.",
        caption_porcelain: "تحليل مكونات التكلفة ومقارنة معدلات الأسعار مع الميزانية",
        profit_heading: "تتبع تطور هامش الربح الإجمالي (GP% Evolution)",
        profit_desc: "مقارنة مستمرة بين هامش الربح المخطط في العقد الأصلي (21%) وهامش الربح الفعلي حتى تاريخه وهامش الربح المتوقع عند اكتمال المشروع (Forecast GP% at Completion).",
        profit_desc_2: "تم إعداد التقرير ليوضح بدقة أسباب انخفاض الهامش من 21% إلى 7% نتيجة ارتفاع التكاليف المباشرة وغير المباشرة، مما مكن الإدارة من تقديم مطالبات تعاقدية مبررة هندسياً.",
        caption_profit: "لوحة مقارنة الأرباح الإجمالية وتأثير التكاليف غير المباشرة",
        cashflow_heading: "منحنيات التدفق النقدي ومدرج العمالة التراكمي",
        cashflow_desc: "بناء منحنى S-Curve للتدفقات النقدية الشهرية ومقارنة المنصرف بالمستحق، وتوزيع متطلبات العمالة (Manpower Histogram) عبر أشهر المشروع لمنع أي تكدس أو عجز في الفرق التنفيذية.",
        caption_cashflow: "منحنى التدفق النقدي التراكمي (Cash Flow S-Curve)",

        // Projects
        proj_tag: "سجل الإنجازات الميدانية",
        proj_title: "المشاريع الكبرى في مصر والمملكة العربية السعودية",
        proj_subtitle: "سجل حافل يشمل مشروعات مستشفيات تخصصية، وكمبوندات فندقية فاخرة، ومجمعات رياضية، ومحفظة متكاملة لشركات المقاولات الكبرى.",
        filter_all: "جميع المشروعات",
        filter_health: "مستشفيات ورعاية صحية (KSA)",
        filter_hotel: "فنادق وكمبوندات كبرى (مصر)",
        filter_corp: "محافظ التحكم بالمشاريع",
        filter_infra: "طرق وبنية تحتية",

        p1_role: "Technical Office Manager & Project Controls",
        p1_title: "مجمع مستشفى وعيادات الأورام التخصصية - الرياض",
        p1_desc: "إدارة المكتب الفني وضبط المشروع بالكامل: بناء الجدول الزمني P6 وتوزيع الموارد، إعداد واعتماد المخططات التنفيذية الطبية المعقدة (C.T Scan, MRI, غرف العزل، محطات التمريض، الأسقف الطبية المعلقة)، وبناء ميزانية الصفر ونموذج Power BI لمراقبة التكاليف.",
        view_controls: "عرض بيانات الضبط",
        view_shopdrawing: "المخطط التنفيذي",

        p2_role: "Construction Manager (شركة DETAC)",
        p2_title: "مشروع كمبوند بالعاصمة الإدارية الجديدة",
        p2_desc: "إدارة تنفيذ مشروع فندقي وسكني سياحي متكامل بمواصفات عالمية: مباني غرف وأجنحة فاخرة، بحيرات صناعية ومسابح أولمبية، ملاعب رياضية، مسطحات خضراء شاسعة ومبنى اجتماعي، مع التنسيق بين مقاولي الأعمال الكهروميكانيكية والتشطيبات الفاخرة.",
        view_drone_photos: "صور الدرون الجوية",
        view_p6: "جدول P6",

        p3_role: "Technical Office & Cost Controls Consultant",
        p3_title: "قسم الأورام - مستشفى الملك سعود التخصصي بالطائف",
        p3_desc: "مراجعة شاملة لجدول الكميات ومستندات العقد، واكتشاف الثغرات التعاقدية ومخاطر التكاليف، وإعداد تحليل التكاليف غير المباشرة (Indirect Analysis) وتوزيعها الزمني، وفحص فجوة التدفق النقدي، وإعداد الجدول الزمني المتكامل للأعمال الإنشائية والتشطيبات الطبية.",
        view_indirect_plan: "خطة غير المباشر",
        view_gap_analysis: "فحص فجوة الكاش",

        p4_role: "Senior Project Controls Engineer",
        p4_title: "محفظة مشروعات شركة دليل الهدى الإنشائية",
        p4_desc: "إدارة وتوجيه التخطيط وضبط التكاليف عبر عدة مشاريع في وقت واحد (العلمين بقيمة 39M، سوهاج بقيمة 51.5M، أسوار المنوفية بقيمة 36.4M، وماونتن فيو التجمع الخامس بقيمة 8.5M). بناء لوحات Power BI لمتابعة بنود المقايسات ومستخلصات مقاولي الباطن.",
        view_boq_dash: "لوحة المقايسات",
        view_sub_dash: "لوحة المقاولين",

        p5_role: "Construction Engineer (شركة الاعتماد)",
        p5_title: "مبنى الجيم والإسطبل الأولمبي للخيول - العاصمة الإدارية",
        p5_desc: "الإشراف على تنفيذ وتشييد منشآت رياضية وفروسية متخصصة بمعايير أولمبية: صالات لياقة بدنية متطورة، مضامير تدريب، عنابر إيواء الخيول بمعايير تهوية وأمان خاصة، وشبكات صرف وتغذية تحتية.",

        p6_role: "Construction Engineer (شركة الاعتماد)",
        p6_title: "مشروع إنشاء فندق بالغردقة",
        p6_desc: "تنفيذ الأعمال الإنشائية والتشطيبات المعمارية لمنتجع فندقي ساحلي، شمل الشاليهات السكنية والخدمات الترفيهية وحمامات السباحة، مع ضمان مقاومة المباني للعوامل الساحلية والرطوبة العالية.",

        p7_role: "Road Engineer (شركة النيل العامة للطرق)",
        p7_title: "إنشاء طريقين في دمياط (طريق أسفلت وطريق خرساني بميناء دمياط)",
        p7_desc: "الإشراف على أعمال الطرق وتثبيت طبقات الأساس لطريق دمياط - عزبة البرج، وتنفيذ طريق خرساني متطور بميناء دمياط لتحمل أوزان الحاويات والشاحنات الثقيلة، وضبط جودة واختبارات المواد والخرسانة المسلحة.",

        p8_role: "BI Architect & Operations Analyst",
        p8_title: "منظومة ذكاء العمليات والمبيعات (MISUO BI Dashboard)",
        p8_desc: "تصميم وبناء لوحة تحكم تشغيلية متكاملة تتابع مؤشرات كفاءة التوريد، نسب التسليم في الوقت المحدد (On-time Delivery Rate)، تحليل أداء المنصات والشركات، وتحديد الاختناقات اللوجستية.",
        view_bi: "عرض لوحة العمليات",

        // Automation Section
        auto_tag: "التحول الرقمي والأتمتة",
        auto_title: "تسخير Python و SQL Server و n8n الذكي في إدارة المشروعات",
        auto_subtitle: "كيف نحول التدفق الهائل من صور ورسائل الموقع وطلبات الاعتماد إلى تدفق بيانات منظم وموثق آلياً.",
        wf1_t: "رسائل وصور الموقع",
        wf1_d: "تحديثات غير منظمة من الميدان",
        wf2_t: "وكيل ذكاء اصطناعي (n8n AI Agent)",
        wf2_d: "استخراج النصوص، تصنيف البنود، والتقييم الفني عبر Python",
        wf3_t: "مراجعة واعتماد مهندس التحكم (HITL)",
        wf3_d: "التحقق والاعتماد بضغطة زر",
        wf4_t: "تخزين في SQL Server وتحديث Power BI",
        wf4_d: "تحديث لحظي للمستودع والجدول الزمني والتكاليف",
        auto_desc_h: "حل مبتكر لتحديات توثيق المواقع الإنشائية",
        auto_desc_p1: "يعاني قطاع المقاولات من ضياع المعلومات في غرف المحادثات وتأخر وصول تقارير الإنتاجية اليومية إلى الإدارة العليا. قمت بتصميم نظام أتمتة يدمج n8n و Python و SQL Server يستقبل التحديثات غير المنظمة ويقوم بتحليلها باستخدام الذكاء الاصطناعي:",
        ben_1: "تصنيف فوري لحزم العمل: ربط كل تحديث بكود التكلفة (CA-Code) المحدد.",
        ben_2: "تقييم المخاطر والمطابقة: مطابقة الأعمال المنفذة بالمواصفات والجدول الزمني.",
        ben_3: "مرحلة التحقق البشري (Approval Step): إرسال بطاقة ملخصة للمهندس للاعتماد بضغطة زر.",
        ben_4: "المزامنة التلقائية: التخزين في مستودع SQL Server والتحديث المباشر للتقارير دون إدخال يدوي مكرر.",

        // Tools
        tools_tag: "المصفوفة التقنية",
        tools_title: "الأدوات والأنظمة الهندسية المتقنة",
        tools_subtitle: "مزيج متكامل من برمجيات إدارة المشروعات العالمية وأدوات ذكاء البيانات الحديثة.",
        cat_pm: "التخطيط وإدارة المشروعات",
        cat_bi: "ذكاء الأعمال والبيانات",
        cat_draft: "المكتب الفني والتصميم",
        cat_auto: "الأتمتة والذكاء الاصطناعي",

        // Edu
        edu_tag: "المؤهلات والدورات المعتمدة",
        edu_title: "التعليم الأكاديمي والتطوير المهني المستمر",
        degree_title: "بكالوريوس الهندسة المدنية (B.Sc. in Civil Engineering)",
        degree_univ: "جامعة الفيوم - كلية الهندسة",
        degree_desc: "تخصص هندسة الإنشاءات وإدارة المشروعات، مع التركيز على التصميم الإنشائي، تكنولوجيا الخرسانة، ومبادئ إدارة وضبط المشروعات.",
        cert_heading: "الشهادات والدورات التدريبية المتقدمة",

        // Contact
        contact_tag: "ابدأ التواصل",
        contact_heading: "جاهز للمساهمة في نجاح مشروعكم القادم",
        contact_desc: "سواء كنتم تبحثون عن قيادة مكتب فني لمشروع طبي أو فندقي عملاق، أو ضبط حوكمة التكاليف والتخطيط الزمني وتحليل البيانات، يسعدني مناقشة سبل التعاون المباشر أو الاستشاري.",
        c_wa_title: "محادثة واتساب مباشرة",
        c_relocate_title: "المقر والجاهزية للانتقال",
        c_relocate_desc: "مقيم في جمهورية مصر العربية (القاهرة / الفيوم)، وعملي الأساسي يدار من مصر، مع كامل الجاهزية والاستعداد للانتقال الفوري للعمل بأي دولة عربية أو العمل الحر (Freelance / Remote Consulting).",
        c_email_title: "البريد الإلكتروني الرسمي",
        c_linkedin_title: "الملف الشخصي على LinkedIn",
        form_heading: "إرسال استفسار مباشر",
        form_name: "الاسم الكريم / الشركة",
        form_email: "البريد الإلكتروني",
        form_proj_type: "طبيعة المشروع أو الفرصة",
        opt_health: "مشروع مستشفى / مركز رعاية صحية",
        opt_hotel: "مشروع فندق / كمبوند سياحي",
        opt_controls: "إدارة وضبط تكاليف مشروعات (Project Controls)",
        opt_tech: "إدارة مكتب فني وحصر كميات",
        opt_bi: "ذكاء أعمال وتحليل بيانات (Power BI / Python / SQL)",
        opt_freelance: "استشارة هندسية / عمل حر (Freelance)",
        form_message: "تفاصيل الرسالة",
        form_submit: "إرسال الرسالة إلى waeleraqy9@gmail.com",

        // Multi-page Navigation
        nav_home: "الرئيسية",
        nav_services: "الركائز والخدمات",
        nav_projects: "المشاريع الكبرى",
        nav_contact: "تواصل معي",
        breadcrumb_home: "الرئيسية",
        breadcrumb_services: "الركائز والخدمات",
        breadcrumb_projects: "المشاريع الكبرى",
        breadcrumb_contact: "تواصل معي",
        
        // 4 Pillars Teaser on Home
        p_teaser_cost_title: "1. التحكم في التكاليف و EVM",
        p_teaser_cost_desc: "تفكيك مقايسات المشاريع وبناء ميزانية الصفر (Budget Zero)، وحوكمة التكاليف المباشرة وغير المباشرة، وحساب مؤشرات EVM لحظياً للتنبؤ بأي انحراف مالي وحماية هوامش الربح.",
        p_feat_cost_1: "ميزانية الصفر (Budget Zero)",
        p_feat_cost_2: "مؤشرات القيمة المكتسبة (CPI / SPI / EAC)",
        
        p_teaser_plan_title: "2. التخطيط والبرمجة الزمنية",
        p_teaser_plan_desc: "تحويل وثائق المشروع إلى خطط زمنية معتمدة عبر ورقة الربط الهندسية (Mapping Sheet) للربط بين BOQ و WBS والتصدير السلس لـ Primavera P6 و MS Project.",
        p_feat_plan_1: "جداول Primavera P6 المعتمدة",
        p_feat_plan_2: "هندسة ورقة الربط (Mapping Sheet)",
        
        p_teaser_tech_title: "3. المكتب الفني وحصر الكميات",
        p_teaser_tech_desc: "الدورة الهندسية الشاملة من دراسة العقود والمقايسات، إعداد واعتماد المخططات التنفيذية الطبية والمعمارية (Shop Drawings)، حصر الكميات الدقيق، وتدقيق المستخلصات.",
        p_feat_tech_1: "مخططات المستشفيات والمشاريع المعقدة",
        p_feat_tech_2: "الحصر الهندسي وتدقيق المستخلصات",
        
        p_teaser_bi_title: "4. ذكاء الأعمال والأتمتة",
        p_teaser_bi_desc: "بناء مستودعات بيانات SQL Server ونماذج Star-Schema في Power BI بمعادلات DAX متقدمة، وأتمتة توثيق الموقع وتصنيف البنود عبر Python و n8n AI.",
        p_feat_bi_1: "Power BI DAX & Star-Schema",
        p_feat_bi_2: "أتمتة الميدان بـ Python & n8n",
        
        explore_pillar: "استعراض الركيزة بالتفصيل",
        view_all_pillars: "استعراض المنظومة والخدمات الهندسية بالكامل",

        // 3-Project Teaser on Home
        feat_proj_tag: "مختارات من المشروعات",
        feat_proj_title: "نماذج واقعية من كبرى المشروعات الهندسية",
        feat_proj_subtitle: "مختارات من مشروعات المستشفيات والكمبوندات ومحافظ التحكم المنفذة في مصر والسعودية، مدعومة بالمخططات والبيانات الحقيقية.",
        view_all_projects_btn: "عرض جميع المشروعات (8 مشروعات) والأدلة الحية",

        // Quick Connect Banner on Home
        qc_title: "جاهز لمناقشة مشروعكم القادم؟",
        qc_desc: "سواء كنتم تبحثون عن قيادة مكتب فني لمشروع طبي أو فندقي، أو ضبط حوكمة التكاليف والتخطيط الزمني وتحليل البيانات، يسعدني مناقشة سبل التعاون المباشر أو الاستشاري.",
        qc_contact_btn: "صفحة التواصل المباشر",
        qc_whatsapp_btn: "محادثة واتساب سريعة",

        // Subpage Heroes
        serv_hero_tag: "المنظومة والخدمات الهندسية",
        serv_hero_title: "الركائز الأربع لإدارة وضبط المشروعات والتحول الرقمي",
        serv_hero_desc: "تفاصيل موسعة ومبنية على مستندات وبيانات المشاريع الحقيقية المنفذة في مصر والسعودية عبر الركائز الأربع: التحكم في التكاليف، التخطيط، المكتب الفني، وذكاء البيانات والأتمتة.",
        
        proj_hero_tag: "سجل الإنجازات الميدانية",
        proj_hero_title: "المشاريع الكبرى والأدلة الهندسية الميدانية",
        proj_hero_desc: "استعراض تفصيلي لـ 8 مشروعات كبرى في مصر والسعودية مع لوحات التحكم، خطط التكاليف، الجداول الزمنية المعتمدة، والمخططات التنفيذية.",
        
        cont_hero_tag: "ابدأ التواصل",
        cont_hero_title: "جاهز للمساهمة في نجاح مشروعكم القادم",
        cont_hero_desc: "مقيم في مصر وعملي يدار من مصر، مع كامل الجاهزية والاستعداد للانتقال الفوري للعمل الميداني بأي دولة عربية أو التعاقد عن بعد بنظام الاستشارات والعمل الحر (Freelance).",
        
        // Form feedback
        form_sending: "جارٍ إرسال الرسالة...",
        form_success: "تم إرسال رسالتكم بنجاح! شكراً لتواصلكم وسأقوم بالرد عليكم في أقرب فرصة.",
        form_error: "تعذر الإرسال التلقائي. يرجى الضغط على زر فتح البريد المباشر أدناه لإرسال رسالتكم فوراً.",
        form_mailto_btn: "فتح تطبيق البريد مباشرة (Mailto Fallback)",

        // 404 Error
        error_tag: "خطأ 404",
        error_title: "الصفحة غير موجودة",
        error_desc: "عذراً، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها كجزء من تطوير الموقع لنسخته متعددة الصفحات.",
        error_back_home: "العودة للرئيسية",
        error_view_projects: "استعراض المشاريع الكبرى"
    },
    en: {
        topbar_status: "Based in Egypt (Conducting primary work from Egypt, including KSA projects) • Ready for Immediate Relocation to any Arab Country or Freelance",
        nda_notice: "Public Portfolio Version • Confidentiality & NDA Compliant",
        brand_name: "Eng. Wael Mohamed Eraqy",
        brand_title: "Technical Office Manager & Project Controls & Data Analysis",
        nav_about: "About",
        nav_pillars: "Core Pillars",
        nav_cost_control: "Cost Control & EVM",
        nav_projects: "Landmark Projects",
        nav_automation: "Data & Automation",
        nav_tools: "Tech Stack",
        nav_contact: "Contact",
        download_cv: "Download CV",

        // Hero
        hero_badge: "Civil Engineer • 12+ Years Track Record • Managing Egypt & KSA Projects from Egypt Base",
        hero_title: 'Engineering Project Delivery Through <span class="gradient-text">Precision Cost Controls</span>, Scheduling & Data Analytics',
        hero_subtitle: "Technical Office Manager, Project Controls & Data Analysis Specialist. 12+ years directing the full technical office lifecycle, Primavera P6 baselines, Budget Zero modeling, EVM metrics, SQL Server data warehousing, Python data cleansing, Power BI DAX dashboards, and n8n intelligent field automations.",
        hero_cta_projects: "Landmark Projects (Hospitals & Hotels)",
        hero_cta_cv: "Download Official CV",
        hero_cta_whatsapp: "Direct WhatsApp Chat",
        metric_exp: "Years of Engineering Leadership",
        metric_ksa: "Healthcare & Hospital Projects (KSA)",
        metric_compound: "New Capital Compound Project",
        metric_portfolio: "Multi-Project Controls Portfolio",
        click_enlarge: "Click to Enlarge & Inspect",

        // About
        about_tag: "Executive Profile",
        about_title: "Engineering Excellence Combining Site Grounding & Data Intelligence",
        about_profile_heading: "Leadership & Technical Discipline",
        about_profile_desc: "Civil Engineering graduate from Fayoum University (2014) with over 12 years of hands-on expertise. Based in Egypt and conducting primary technical management from Egypt for mega projects locally and across the Kingdom of Saudi Arabia, with full readiness for immediate relocation to any Arab country or freelance consulting engagements.",
        about_profile_desc_2: "Leading the complete engineering cycle from BOQ deconstruction and contract totals, architectural and MEP shop drawings, exact quantity takeoff, to master Primavera P6 baselines and Earned Value Management (EVM).",
        about_synergy_heading: "The Competitive Advantage: Engineering Meets Data",
        about_synergy_desc: "Bridging the gap between site execution, technical office, and corporate finance through a unified stack of Power BI, advanced DAX, Python, Microsoft SQL Server, and n8n workflow automation.",
        about_synergy_desc_2: "This integration delivers proactive risk alerts, pinpoints material scrap overruns, and resolves cash flow bottlenecks before impacting project profitability.",
        comp_1: "Specialized oncology hospitals and complex healthcare facilities in KSA",
        comp_2: "Construction management of luxury compound and resorts (450M EGP)",
        comp_3: "Budget Zero financial modeling, indirect cost plans, and comprehensive QS",

        // Core Pillars
        pillars_tag: "Four Engineering Pillars",
        pillars_title: "Core Pillars of Technical Office & Project Controls",
        pillars_subtitle: "Comprehensive methodologies based on authentic project files executed across Egypt and Saudi Arabia:",
        p_tab_cost: "1. Cost Control & EVM",
        p_tab_plan: "2. Planning & Scheduling (P6 & MS Project)",
        p_tab_tech: "3. Technical Office & QS",
        p_tab_bi: "4. BI, Python, SQL & n8n Automation",
        cost_p_title: "Cost Control, Budget Zero & Indirect Governance",
        cost_p_desc: "Deconstructing contract BOQs into Budget Zero frameworks, separating direct commitments from indirect overheads, and time-phasing all supervisory, equipment, and administrative costs.",
        plan_p_title: "Planning, Scheduling & Integrated Mapping Sheet",
        plan_p_desc: "Master scheduling driven by an advanced Excel Mapping Sheet that maps BOQ line items directly to WBS levels, activity codes, and resource dictionaries for direct error-free import into Oracle Primavera P6 and Microsoft Project.",
        tech_p_title: "Full Technical Office Lifecycle & Quantity Surveying",
        bi_p_title: "Business Intelligence, Data Analytics & Automation Stack",
        bi_p_desc: "End-to-end digital transformation utilizing Python and SQL Server alongside Power BI DAX and n8n automated AI agents:",

        // Cost Control Hub
        cc_hub_tag: "Cost Governance Ecosystem",
        cc_hub_title: "Precision Cost Control & Earned Value Management (EVM)",
        cc_hub_subtitle: "An in-depth engineering walkthrough showing how tender BOQs and site commitments are transformed into a living data model that flags cost deviations before they impact profit margins.",
        cc_flow_title: "6-Stage Integrated Cost Governance Lifecycle",
        step1_h: "BOQ & Contract Audit",
        step1_p: "Thorough verification of quantities, tender unit rates versus market benchmarks, and contractual risks.",
        step2_h: "Budget Zero & Indirects",
        step2_p: "Establishing true direct execution costs and phasing indirect site overheads across project duration.",
        step3_h: "Cost Allocation (CA-Codes)",
        step3_p: "Deploying a rigorous CA-Code tree to map purchases, subcontractors, and labor to WBS packages.",
        step4_h: "Power BI Star-Schema",
        step4_p: "Unifying site invoices, store receipts, and P6 schedule progress into a synchronized BI data warehouse.",
        step5_h: "Wastage & Subcontractor Audit",
        step5_p: "Monitoring scrap/loss percentages against contract allowances and auditing subcontractor IPCs.",
        step6_h: "Forecasting (EAC & GP%)",
        step6_p: "Monthly EVM recalibration, calculating EAC/VAC, and safeguarding final project profit margins.",

        // Simulator
        sim_heading: "Interactive Earned Value Management (EVM) Laboratory",
        sim_sub: "Adjust project variables below to simulate real-time EVM health metrics (CPI / SPI / EAC / VAC):",
        sim_live_math: "Standard PMI & AACE Project Controls Formulas",
        lbl_bac: "Budget At Completion (BAC)",
        lbl_planned: "Planned Progress % (from P6)",
        lbl_actual_prog: "Earned (Actual) Progress %",
        lbl_ac: "Actual Cost to Date (AC)",
        presets_label: "Quick Presets:",
        preset_healthy: "Healthy Project",
        preset_cost: "Cost Overrun Scenario",
        preset_delay: "Behind Schedule Scenario",
        diag_warning: "Technical Diagnosis: The project is spending faster than progress earned (CPI = 0.93). Recommendation: Immediately audit subcontractor invoice deductions and material scrap rates to arrest cost overrun.",

        // Tabs
        cc_evidence_title: "Authentic Artifacts from Applied Project Controls Dashboards",
        tab_schema: "Star-Schema Data Model",
        tab_wastage: "Material Wastage & Stores",
        tab_rates: "Unit Rate Cost Breakdown",
        tab_profit: "Gross Profit Evolution",
        tab_cashflow: "Cash Flow & Manpower",
        schema_heading: "Enterprise Star-Schema Project Controls Architecture",
        schema_desc: "Actual data model built in Power BI for a SAR 35M Oncology Clinic project in Riyadh. The model connects central CA Report Fact tables with Dimension tables through Bridge tables for Subcontractors, Materials, Direct Labor, and Indirect Overheads.",
        view_full_schema: "View Full Architecture Diagram",
        caption_schema: "Power BI Table Relationships & Bridge Data Model for Project Controls",
        wastage_heading: "On-Site Material Wastage & Warehouse Tracking",
        wastage_desc: "Interactive dashboard tracking field scrap against contractual tender allowances. Key bulk materials (cement, plaster, gypsum boards, adhesives, medical vinyl) are monitored to pinpoint financial variances immediately.",
        caption_wastage: "Hospital Project Material Wastage & Warehouse Inventory Control Dashboard",
        porcelain_heading: "Detailed Unit Rate Cost Breakdown Analysis",
        porcelain_desc: "Deconstructing square-meter costs for specialized finishes (Porcelain flooring & wall claddings) into materials (64%), subcontractors (34%), and manpower (2%).",
        porcelain_desc_2: "Highlights achieving significant cost savings (Actual rate of 195 SAR/m2 versus 930 SAR/m2 budget) via strategic procurement, unlocking substantial gross profit for the package.",
        caption_porcelain: "Package Cost Driver Breakdown and Unit Rate vs Budget Benchmark",
        profit_heading: "Gross Profit Margin Evolution Tracking",
        profit_desc: "Continuous financial monitoring comparing original tender profit margin (21%) against current earned progress margin and forecast margin at project completion (EAC).",
        profit_desc_2: "Engineered to transparently justify margin variations due to indirect staffing overheads and site adjustments, enabling sound contractual variation claims.",
        caption_profit: "Gross Profit Performance Comparison (Original vs Revised vs EAC)",
        cashflow_heading: "Cumulative Cash Flow S-Curve & Manpower Histogram",
        cashflow_desc: "Monthly S-Curve cash inflow/outflow curves combined with detailed 19-trade manpower histograms, preventing site bottlenecks and liquidity shortfalls.",
        caption_cashflow: "Cumulative Budgeted Cost S-Curve & Monthly Expenditure",

        // Projects
        proj_tag: "Track Record & Portfolio",
        proj_title: "Landmark Projects in Egypt & Saudi Arabia",
        proj_subtitle: "Proven project delivery across specialized oncology hospitals, five-star luxury compounds and resorts, Olympic sports facilities, and multi-site enterprise portfolios.",
        filter_all: "All Projects",
        filter_health: "Healthcare & Hospitals (KSA)",
        filter_hotel: "Hotels & Compounds (Egypt)",
        filter_corp: "Project Controls Portfolios",
        filter_infra: "Infrastructure & Roads",

        p1_role: "Technical Office Manager & Project Controls",
        p1_title: "Oncology Specialized Clinics & Hospital - Riyadh, KSA",
        p1_desc: "Led the complete technical office and project controls: developed P6 baseline schedule and resource allocation, produced and approved specialized medical shop drawings (CT/MRI suites, cleanrooms, medical gas, acoustic ceilings), and built the Power BI EVM cost control model.",
        view_controls: "View Controls Dashboard",
        view_shopdrawing: "View Shop Drawing",

        p2_role: "Construction Manager (DETAC)",
        p2_title: "Compound Project in New Administrative Capital",
        p2_desc: "Managed execution of a premier luxury hotel resort and residential compound: guest wings, artificial lakes, Olympic swimming pools, sports facilities, expansive landscaping, and social center, coordinating multidisciplinary MEP and luxury finishing packages.",
        view_drone_photos: "View Drone Aerials",
        view_p6: "P6 Baseline",

        p3_role: "Technical Office & Controls Consultant",
        p3_title: "Oncology Department - King Saud Specialized Hospital (Taif, KSA)",
        p3_desc: "Comprehensive BOQ and contract document audit to identify contractual inconsistencies and cost risks. Engineered time-phased indirect cost analyses, forecasted cash gaps, and established the master project schedule.",
        view_indirect_plan: "Indirect Plan",
        view_gap_analysis: "Cash Gap Analysis",

        p4_role: "Senior Project Controls Engineer",
        p4_title: "Dalel El-Hoda Multi-Project Construction Portfolio",
        p4_desc: "Directed planning and cost control across multiple concurrent projects (Alamein 39M EGP, Sohag 51.5M EGP, Menofia Walls 36.4M EGP, and Mountain View New Cairo 8.5M EGP). Engineered Power BI dashboards for BOQ and subcontractor billing tracking.",
        view_boq_dash: "BOQ Dashboard",
        view_sub_dash: "Subcontractor BI",

        p5_role: "Construction Engineer (Elatemaad)",
        p5_title: "Olympic Horse Stables & Gym Building - New Administrative Capital",
        p5_desc: "Supervised construction of Olympic-grade sports and equestrian facilities: advanced fitness gyms, training arenas, specialized stables with tailored ventilation, and underground utility networks.",

        p6_role: "Construction Engineer (Elatemaad)",
        p6_title: "Hotel Construction Project - Hurghada Red Sea",
        p6_desc: "Supervised civil and architectural finishing for a coastal resort complex, including beach chalets, recreational pools, and coastal defense structures built to withstand marine humidity.",

        p7_role: "Road Engineer (Nile Company for Road)",
        p7_title: "Two Roads in Damietta (Asphalt Road & Damietta Port Concrete Pavement)",
        p7_desc: "Supervised sub-base stabilization, asphalt works on Damietta - Ezbet El-Borg road, and heavy-duty concrete highway construction inside Damietta Port engineered for heavy container freight traffic.",

        p8_role: "BI Architect & Operations Analyst",
        p8_title: "MISUO Enterprise Operations & Sales Intelligence BI",
        p8_desc: "Architected a comprehensive operations dashboard tracking supply chain fulfillment, on-time delivery rates, platform order velocity, and logistics distribution bottlenecks.",
        view_bi: "View Operations BI",

        // Automation Section
        auto_tag: "Digital Transformation",
        auto_title: "Empowering Project Controls with Python, SQL Server & n8n AI",
        auto_subtitle: "Converting the chaotic stream of field WhatsApp messages, site photos, and tickets into structured, auditable project intelligence.",
        wf1_t: "Site Photos & Messages",
        wf1_d: "Unstructured field updates",
        wf2_t: "n8n AI Engineering Agent",
        wf2_d: "OCR text extraction, CA-Code matching & QA scoring via Python",
        wf3_t: "Human-in-the-Loop Review",
        wf3_d: "One-click approval by Controls Engineer",
        wf4_t: "SQL Server & Power BI Sync",
        wf4_d: "Automated schedule, warehouse & cost updates",
        auto_desc_h: "Modern Engineering for Site Documentation Bottlenecks",
        auto_desc_p1: "Contractors routinely lose vital data in chat threads, resulting in delayed weekly reports and unnoticed budget drift. I engineered an automation pipeline on n8n, Python, and SQL Server that captures unstructured field messages and uses AI for:",
        ben_1: "Instant WBS Classification: Tagging field work to its exact CA-Code automatically.",
        ben_2: "Specification Verification: Evaluating executed work against technical criteria.",
        ben_3: "Human-in-the-loop Governance: Delivering an executive digest for one-click engineer approval.",
        ben_4: "Instant Analytics Sync: Updating SQL Server databases and Power BI datasets without repetitive manual data entry.",

        // Tools
        tools_tag: "Technical Matrix",
        tools_title: "Mastered Engineering & Analytical Stack",
        tools_subtitle: "An end-to-end synergy of global project controls software, CAD/BIM tools, and modern data platforms.",
        cat_pm: "Project Controls & Planning",
        cat_bi: "Business Intelligence & Data",
        cat_draft: "Technical Office & CAD/BIM",
        cat_auto: "Automation & AI Engineering",

        // Edu
        edu_tag: "Academic & Professional Credentials",
        edu_title: "Formal Education & Continuous Professional Development",
        degree_title: "Bachelor of Science in Civil Engineering (B.Sc.)",
        degree_univ: "Faculty of Engineering, Fayoum University (2014)",
        degree_desc: "Specialized in Structural Engineering and Project Management, covering structural design, reinforced concrete technology, and project controls principles.",
        cert_heading: "Advanced Professional Certifications",

        // Contact
        contact_tag: "Get in Touch",
        contact_heading: "Ready to Deliver Excellence on Your Next Megaproject",
        contact_desc: "Whether you need high-caliber technical office leadership for a healthcare or hospitality megaproject, or robust cost governance and data analytics across your portfolio in KSA or Egypt, let's discuss how I can add immediate value.",
        c_wa_title: "Direct WhatsApp Chat",
        c_relocate_title: "Location & Relocation Readiness",
        c_relocate_desc: "Based in Egypt (Cairo / Fayoum) with primary operations conducted from Egypt, fully prepared for immediate relocation across any Arab country or remote freelance / consulting agreements.",
        c_email_title: "Official Direct Email",
        c_linkedin_title: "LinkedIn Profile",
        form_heading: "Send a Direct Inquiry",
        form_name: "Full Name / Organization",
        form_email: "Business Email",
        form_proj_type: "Project Type or Opportunity",
        opt_health: "Healthcare / Hospital Project",
        opt_hotel: "Hospitality / Compound Project",
        opt_controls: "Project Controls Leadership",
        opt_tech: "Technical Office & Quantity Surveying",
        opt_bi: "Data Analytics & BI (Power BI / Python / SQL)",
        opt_freelance: "Engineering Consultancy / Freelance",
        form_message: "Message Details",
        form_submit: "Send Message to waeleraqy9@gmail.com",

        // Multi-page Navigation
        nav_home: "Home",
        nav_services: "Services & Pillars",
        nav_projects: "Projects",
        nav_contact: "Contact",
        breadcrumb_home: "Home",
        breadcrumb_services: "Services & Pillars",
        breadcrumb_projects: "Projects",
        breadcrumb_contact: "Contact",
        
        // 4 Pillars Teaser on Home
        p_teaser_cost_title: "1. Cost Control & EVM",
        p_teaser_cost_desc: "Deconstructing contract BOQs into Budget Zero frameworks, indirect cost governance, and real-time EVM metrics (CPI/SPI/EAC) to pinpoint deviations and protect profitability.",
        p_feat_cost_1: "Budget Zero Financial Modeling",
        p_feat_cost_2: "EVM Analytics (CPI / SPI / EAC)",
        
        p_teaser_plan_title: "2. Planning & Scheduling",
        p_teaser_plan_desc: "Transforming contract documents into approved master schedules using an engineered Mapping Sheet for direct, error-free import into Primavera P6 and MS Project.",
        p_feat_plan_1: "Primavera P6 Master Baselines",
        p_feat_plan_2: "Engineered BOQ Mapping Sheet",
        
        p_teaser_tech_title: "3. Technical Office & QS",
        p_teaser_tech_desc: "The complete engineering lifecycle: contract audits, complex medical & architectural shop drawings, precision quantity takeoff, and owner/subcontractor IPC governance.",
        p_feat_tech_1: "Hospital & Complex Shop Drawings",
        p_feat_tech_2: "Precision Takeoff & IPC Audits",
        
        p_teaser_bi_title: "4. BI & Automation Stack",
        p_teaser_bi_desc: "Architecting SQL Server data warehouses, Power BI Star-Schema with custom DAX, and automated field intelligence via Python scripts and n8n AI agents.",
        p_feat_bi_1: "Power BI DAX & Star-Schema",
        p_feat_bi_2: "Python & n8n AI Automations",
        
        explore_pillar: "Explore Full Pillar Details",
        view_all_pillars: "Explore All Engineering Pillars & Services",

        // 3-Project Teaser on Home
        feat_proj_tag: "Selected Portfolio Highlights",
        feat_proj_title: "Landmark Engineering Megaprojects",
        feat_proj_subtitle: "Signature hospital, luxury compound, and corporate portfolio deliveries executed across Egypt and Saudi Arabia, backed by authentic field data.",
        view_all_projects_btn: "View All 8 Projects & Live Evidence",

        // Quick Connect Banner on Home
        qc_title: "Ready to Discuss Your Next Megaproject?",
        qc_desc: "Whether you need high-caliber technical office leadership for a healthcare or hospitality project, or robust cost governance and data analytics across your portfolio, let's connect.",
        qc_contact_btn: "Open Contact Page",
        qc_whatsapp_btn: "Instant WhatsApp Chat",

        // Subpage Heroes
        serv_hero_tag: "Engineering Ecosystem & Services",
        serv_hero_title: "Four Pillars of Technical Office, Controls & Digital Transformation",
        serv_hero_desc: "Comprehensive applied methodologies based on authentic project files executed across Egypt and Saudi Arabia: Cost Control, Scheduling, Technical Office, and BI & Automation.",
        
        proj_hero_tag: "Track Record & Portfolio",
        proj_hero_title: "Landmark Megaprojects & Field Evidence Artifacts",
        proj_hero_desc: "A comprehensive showcase of 8 megaprojects across Egypt & Saudi Arabia backed by authentic dashboards, cost plans, baseline schedules, and shop drawings.",
        
        cont_hero_tag: "Get in Touch",
        cont_hero_title: "Ready to Deliver Excellence on Your Next Megaproject",
        cont_hero_desc: "Based in Egypt with operations conducted from Egypt, fully prepared for immediate relocation across any Arab country or remote freelance / consulting agreements.",
        
        // Form feedback
        form_sending: "Processing message...",
        form_success: "Your message has been sent successfully! Thank you for reaching out, I will reply shortly.",
        form_error: "Automatic delivery failed. Please click the direct mail button below to send your message immediately.",
        form_mailto_btn: "Open Mail Client Directly (Mailto)",

        // 404 Error
        error_tag: "404 Error",
        error_title: "Page Not Found",
        error_desc: "Sorry, the page you are looking for does not exist or has been moved as part of the multi-page website architecture.",
        error_back_home: "Return to Home",
        error_view_projects: "Explore Landmark Projects"
    }
};

// State Variables
let currentLang = 'ar';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    handleLegacyHashRedirects();
    initLanguage();
    initNavigation();
    highlightActiveNav();
    initFilters();
    initCounters();
    initYear();
    initHashTabs();
});

// Handle Legacy Hash URLs (/ #projects, /#automation, etc.)
function handleLegacyHashRedirects() {
    const rawHash = window.location.hash.toLowerCase();
    const pathname = window.location.pathname.toLowerCase();
    const isIndex = pathname.endsWith('index.html') || pathname.endsWith('/') || !pathname.includes('.html');

    if (isIndex && rawHash) {
        if (rawHash === '#projects') {
            window.location.replace('projects.html');
        } else if (rawHash === '#automation') {
            window.location.replace('services.html#automation');
        } else if (rawHash === '#core-pillars' || rawHash === '#pillars') {
            window.location.replace('services.html#core-pillars');
        } else if (rawHash === '#cost-control' || rawHash === '#evm') {
            window.location.replace('services.html#pillar-cost');
        } else if (rawHash === '#tech-stack' || rawHash === '#tools') {
            window.location.replace('services.html#tech-stack');
        } else if (rawHash === '#contact') {
            window.location.replace('contact.html');
        }
    }
}

// Highlight Current Active Page in Navigation
function highlightActiveNav() {
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const bodyPage = document.body.getAttribute('data-page');

    navLinks.forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        link.classList.remove('active');

        if (bodyPage) {
            if (bodyPage === 'home' && (href === 'index.html' || href === './' || href === '#hero')) {
                link.classList.add('active');
            } else if (bodyPage === 'services' && href.includes('services.html')) {
                link.classList.add('active');
            } else if (bodyPage === 'projects' && href.includes('projects.html')) {
                link.classList.add('active');
            } else if (bodyPage === 'contact' && href.includes('contact.html')) {
                link.classList.add('active');
            }
        } else {
            if (href && currentPath.endsWith(href)) {
                link.classList.add('active');
            } else if ((currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href === 'index.html' || href === './')) {
                link.classList.add('active');
            }
        }
    });
}

// Auto-switch tabs if page opened with specific hash (e.g., services.html#pillar-planning)
function initHashTabs() {
    const hash = window.location.hash;
    if (hash && (hash === '#pillar-cost' || hash === '#pillar-planning' || hash === '#pillar-tech' || hash === '#pillar-bi')) {
        const pillarId = hash.replace('#', '');
        setTimeout(() => {
            if (typeof window.switchPillarTab === 'function') {
                window.switchPillarTab(pillarId);
            }
        }, 100);
    }
}

// Initialize Language
function initLanguage() {
    const savedLang = localStorage.getItem('portfolio_lang') || 'ar';
    setLanguage(savedLang);

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(nextLang);
        });
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Apply translations
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update EVM diagnosis if simulator is loaded
    if (typeof updateEvmCalculations === 'function') {
        updateEvmCalculations();
    }
}

// Navigation & Sticky Bar (NO ACTIVE BORDER / CLEAN TEXT HOVER)
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = hamburgerBtn.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                const icon = hamburgerBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

// Core Pillars Tab Switcher
window.switchPillarTab = function(pillarId) {
    const tabBtns = document.querySelectorAll('.pillar-tab-btn');
    const tabPanels = document.querySelectorAll('.pillar-panel');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    const activePanel = document.getElementById(pillarId);
    if (activePanel) {
        activePanel.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
};

// Project Filtering
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.35s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Dashboard Evidence Tabs
window.switchEvTab = function(tabId) {
    const tabBtns = document.querySelectorAll('.ev-tab-btn');
    const tabPanels = document.querySelectorAll('.evidence-tab-panel');

    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    const activePanel = document.getElementById(tabId);
    if (activePanel) {
        activePanel.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
};

// Lightbox Modal
window.openLightbox = function(imgSrc, captionText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCaption = document.getElementById('lightbox-caption');

    if (modal && modalImg && modalCaption) {
        modalImg.src = imgSrc;
        modalCaption.textContent = captionText || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeLightbox = function(event) {
    if (event && event.target && event.target.id !== 'lightbox-modal' && !event.target.classList.contains('lightbox-close')) {
        return;
    }
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeLightbox();
    }
});

// Counter Animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let current = 0;
                    const increment = target / 25;
                    const update = () => {
                        current += increment;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            setTimeout(update, 40);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    update();
                });
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        observer.observe(heroSection);
    }
}

// Current Year
function initYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// Contact Form Handler - Formspree / Web3Forms with Client Validation & Mailto Fallback
window.handleContactSubmit = async function(event) {
    event.preventDefault();
    const form = event.target || document.getElementById('portfolio-contact-form');
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const typeInput = document.getElementById('project-type');
    const msgInput = document.getElementById('sender-msg');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;

    if (!nameInput || !emailInput || !msgInput || !feedback) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const type = typeInput ? typeInput.value : 'General Inquiry';
    const msg = msgInput.value.trim();

    // Client-side Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
        feedback.className = 'form-feedback-msg show error';
        feedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${currentLang === 'ar' ? 'يرجى إدخال الاسم أو اسم المؤسسة.' : 'Please enter your name or organization.'}`;
        nameInput.focus();
        return;
    }

    if (!email || !emailRegex.test(email)) {
        feedback.className = 'form-feedback-msg show error';
        feedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${currentLang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح.' : 'Please enter a valid email address.'}`;
        emailInput.focus();
        return;
    }

    if (!msg || msg.length < 5) {
        feedback.className = 'form-feedback-msg show error';
        feedback.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${currentLang === 'ar' ? 'يرجى كتابة تفاصيل الاستفسار أو الفرصة.' : 'Please provide details for your inquiry.'}`;
        msgInput.focus();
        return;
    }

    // Set loading state
    feedback.className = 'form-feedback-msg show loading';
    feedback.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLang === 'ar' ? 'جارٍ إرسال الرسالة...' : 'Sending your message...'}`;
    if (submitBtn) submitBtn.disabled = true;

    const subject = `[Portfolio Inquiry] ${type} - from ${name}`;
    const bodyContent = `Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${msg}\n\nRecipient: waeleraqy9@gmail.com`;
    const mailtoUrl = `mailto:waeleraqy9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;

    // Check if form has an action URL (Formspree or Web3Forms endpoint)
    const actionUrl = form ? form.getAttribute('action') : null;
    let submissionSuccess = false;

    if (actionUrl && actionUrl.startsWith('http') && !actionUrl.includes('YOUR_ACCESS_KEY')) {
        try {
            const formData = new FormData(form);
            formData.append('subject', subject);
            
            const response = await fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                submissionSuccess = true;
            }
        } catch (err) {
            console.warn('Form endpoint submit error, falling back to mailto:', err);
        }
    }

    if (submitBtn) submitBtn.disabled = false;

    if (submissionSuccess) {
        feedback.className = 'form-feedback-msg show success';
        feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${currentLang === 'ar' ? 'تم إرسال رسالتكم بنجاح! شكراً لتواصلكم وسأقوم بالرد عليكم في أقرب فرصة.' : 'Your inquiry has been sent successfully! Thank you for reaching out, I will reply shortly.'}`;
        form.reset();
    } else {
        // Fallback to mailto
        feedback.className = 'form-feedback-msg show success';
        feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${currentLang === 'ar' ? 'شكراً لتواصلكم! يتم فتح تطبيق البريد لإرسال رسالتكم مباشرة إلى waeleraqy9@gmail.com...' : 'Thank you! Launching your mail client to send directly to waeleraqy9@gmail.com...'}<div style="margin-top: 10px;"><a href="${mailtoUrl}" class="btn btn-sm btn-outline btn-mailto-fallback"><i class="fa-solid fa-envelope-open-text"></i> ${currentLang === 'ar' ? 'فتح تطبيق البريد يدوياً' : 'Open Email Client Manually'}</a></div>`;
        setTimeout(() => {
            window.location.href = mailtoUrl;
        }, 600);
    }
};

window.triggerDirectMail = function() {
    const name = (document.getElementById('sender-name') || {}).value || '';
    const email = (document.getElementById('sender-email') || {}).value || '';
    const type = (document.getElementById('project-type') || {}).value || 'General Inquiry';
    const msg = (document.getElementById('sender-msg') || {}).value || '';
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${type} - from ${name || 'Inquirer'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject Type: ${type}\n\nMessage:\n${msg}\n\nRecipient: waeleraqy9@gmail.com`);
    window.location.href = `mailto:waeleraqy9@gmail.com?subject=${subject}&body=${body}`;
};
