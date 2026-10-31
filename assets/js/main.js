const IMG={
  "AI": "assets/images/ai.webp",
  "DC": "assets/images/dc.webp",
  "F_AI": "assets/images/f_ai.webp",
  "F_DC": "assets/images/f_dc.webp",
  "F_MT": "assets/images/f_mt.webp",
  "MT": "assets/images/mt.webp",
  "S1": "assets/images/s1.webp",
  "S2": "assets/images/s2.webp",
  "S3": "assets/images/s3.webp",
  "S4": "assets/images/s4.webp",
  "S5": "assets/images/s5.webp",
  "S6": "assets/images/s6.webp"
};const ic=n=>`<svg class="i"><use href="#i-${n}"/></svg>`;
const $=s=>document.querySelector(s);
const vals=[['handshake','Trust','We do what is right'],['users','People','We grow together'],['lightbulb','Innovation','We create better ways'],['shield-check','Excellence','We deliver with quality'],['leaf','Sustainability','We build for generations']];
if($('#vals'))$('#vals').innerHTML=vals.map(v=>`<div class="card rv"><span class="ib">${ic(v[0])}</span><b>${v[1]}</b><span>${v[2]}</span></div>`).join('');
const sv=[['cloud','S1','Cloud Solutions','Scalable, secure and reliable cloud infrastructure tailored for your business.'],['brain-circuit','S2','AI & Big Data','Unlock the power of data and AI to drive insights, automation and innovation.'],['network','S3','ERP & Solution Integration','Seamless ERP implementation and system integration to optimize your operations.'],['code-xml','S4','Application Development','Custom applications built with modern technologies to fit your needs.'],['shield-check','S5','Cyber Security','Protect what matters with proactive security solutions, threat detection and 24/7 cyber defense.']];
if($('#sg'))$('#sg').innerHTML=sv.map(s=>`<article class="card sc rv"><img src="${IMG[s[1]]}" alt="${s[2]}" loading="lazy" decoding="async"><div><span class="ib">${ic(s[0])}</span><h3>${s[2]}</h3><p>${s[3]}</p></div></article>`).join('');
if($('#msi'))$('#msi').src=IMG.S6;
const sols=[
{id:'solution-ai',img:'AI',full:'F_AI',tag:'AI Solutions',t:'AI Chatbot และโซลูชัน AI ครบวงจร',lead:'เพิ่มประสิทธิภาพ ลดต้นทุน และขับเคลื่อนธุรกิจสู่อนาคต ด้วยเทคโนโลยี AI ชั้นสูงผสานความเชี่ยวชาญเชิงธุรกิจ',
pts:['ตอบคำถามอัตโนมัติ ตลอด 24/7','เชื่อมต่อข้อมูลจากหลายระบบ (ERP, CRM, Document, Website)','รองรับภาษาไทยและหลายภาษา','ปรับแต่งให้ตรงกับธุรกิจของคุณ','ปลอดภัยด้วยมาตรฐานระดับองค์กร'],
ch:['AI Chatbot & Virtual Assistant','Document AI','Process Automation','Data & Analytics','Integration & API','AI Consulting & Custom Solution'],
mt:[['30–50%','เพิ่มประสิทธิภาพการทำงาน'],['20–40%','ลดต้นทุนการดำเนินงาน'],['40–60%','ลดเวลาในการทำงาน']]},
{id:'solution-dc',img:'DC',full:'F_DC',tag:'Data Center Solutions',t:'Data Center Solutions — โครงสร้างพื้นฐานดิจิทัลที่พร้อมรองรับอนาคต',lead:'บริการออกแบบ สร้าง และดูแล Data Center แบบครบวงจร ด้วยมาตรฐานระดับสากล (TIA, Uptime, ISO)',
pts:['Consult & Design → Build & Deploy → Operate & Monitor 24/7 → Maintain & Support','ทีมวิศวกรและผู้เชี่ยวชาญเฉพาะทาง ออกแบบตามความต้องการของธุรกิจ','รองรับการขยายตัวในอนาคต (Scalable)','บริการครบวงจรจาก Single Partner'],
ch:['Power & Cooling (UPS, Generator)','Network & Connectivity','Security & Monitoring','Operation & Maintenance','Dell Technologies','HPE','Cisco','Schneider Electric','Vertiv','NVIDIA']},
{id:'solution-maintenance',img:'MT',full:'F_MT',tag:'Annual Maintenance',t:'Annual Maintenance — Hardware & Software',lead:'One Partner. Complete Care. ดูแลระบบของคุณตลอดปี ครอบคลุมทั้งฮาร์ดแวร์และซอฟต์แวร์ โดยทีมผู้เชี่ยวชาญ',
pts:['Hardware: Preventive Maintenance, Break/Fix Support, Hardware Replacement, Health Check & Monitoring','Software: Update & Patch Management, Security Management, Performance Optimization, Backup & Recovery','SLA: Response Time · High Availability · Expert Support 24×7 · Detailed Reporting'],
ch:['Servers','Storage','Network','Database','Virtualization','Operating Systems','Applications','Cloud Platform']}];
if($('#sols'))$('#sols').innerHTML=sols.map(s=>`<div class="sol" id="${s.id}"><div class="pic rv">${s.svg||`<img src="${IMG[s.img]}" alt="${s.tag}" loading="lazy">`}</div><div class="rv"><p class="eb">${s.tag}</p><h3>${s.t}</h3><p class="lead">${s.lead}</p><ul class="pts">${s.pts.map(p=>`<li>${ic('check')}<span>${p}</span></li>`).join('')}</ul><div class="ch">${s.ch.map(c=>`<span>${c}</span>`).join('')}</div>${s.mt?`<div class="mt">${s.mt.map(m=>`<div><b class="gold">${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>`:''}${s.full?`<button class="btn" data-f="${s.full}">ดูรายละเอียดฉบับเต็ม ${ic('arrow-right')}</button>`:`<a class="btn" href="#contact">สอบถามเพิ่มเติม ${ic('arrow-right')}</a>`}</div></div>`).join('');
const pt=[['cloud','Cloud Solutions','AWS · Google Cloud'],['brain-circuit','Data & AI','Databricks · Snowflake · Tableau · Palantir'],['shield-check','Cybersecurity','Palo Alto Networks · Fortinet · Sophos · CrowdStrike · Check Point · Sangfor'],['server','Hardware, Server & Network','Dell Technologies · HPE · Cisco · Lenovo · Huawei · H3C · Arista'],['code-xml','Application & Development','Red Hat · VMware · GitHub · MuleSoft'],['users','Collaboration & Productivity','Google Workspace · Slack · Zoom']];
if($('#pg'))$('#pg').innerHTML=pt.map(p=>`<div class="card rv"><h3><span class="ib">${ic(p[0])}</span>${p[1]}</h3><div class="ch" style="margin:0">${p[2].split(' · ').map(c=>`<span>${c}</span>`).join('')}</div></div>`).join('');
// lightbox
const lb=$('#lb');if(lb){document.addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){lb.querySelector('img').src=IMG[b.dataset.f];lb.classList.add('o')}else if(lb.classList.contains('o'))lb.classList.remove('o')});
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('o')})}
const CONTACT='https://formsubmit.co/ajax/saleadmin@vertexinfra.co.th';
const FM=$('#fm'),FM_BTN=$('#fm-btn'),FM_OK=$('#ok'),FM_ERR=$('#err'),FM_PEND=$('#pending');
if(FM&&FM_BTN){
const FM_LABEL=FM_BTN.textContent.trim();
const fmNext=$('#form-next');
const fmEmail=FM.querySelector('#fm-email'),fmPhone=FM.querySelector('#fm-phone');
const thai=/[\u0E00-\u0E7F]/;
const emailRx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const fmMsg=(t,e)=>document.documentElement.lang==='en'?e:t;
const validateEmail=()=>{if(!fmEmail)return true;const v=fmEmail.value.trim();if(thai.test(v)){fmEmail.setCustomValidity(fmMsg('อีเมลใช้ตัวอักษรภาษาอังกฤษและ @ เท่านั้น ห้ามพิมพ์ภาษาไทย','Use English only for email — no Thai characters.'));return false}if(!emailRx.test(v)){fmEmail.setCustomValidity(fmMsg('รูปแบบอีเมลไม่ถูกต้อง','Please enter a valid email address.'));return false}fmEmail.setCustomValidity('');return true};
const validatePhone=()=>{if(!fmPhone)return true;const v=fmPhone.value.trim();if(!v){fmPhone.setCustomValidity('');return true}if(!/^\d+$/.test(v)){fmPhone.setCustomValidity(fmMsg('เบอร์โทรใส่ได้เฉพาะตัวเลข 0–9','Phone number must contain digits only (0–9).'));return false}if(v.length<9||v.length>15){fmPhone.setCustomValidity(fmMsg('เบอร์โทรควรมี 9–15 หลัก','Phone number should be 9–15 digits.'));return false}fmPhone.setCustomValidity('');return true};
if(fmEmail){
const stripThaiEmail=()=>{const c=fmEmail.value.replace(/[\u0E00-\u0E7F]/g,'');if(fmEmail.value!==c)fmEmail.value=c;fmEmail.setCustomValidity('')};
fmEmail.addEventListener('beforeinput',e=>{const d=e.data;if(d&&thai.test(d))e.preventDefault()});
fmEmail.addEventListener('input',stripThaiEmail);
fmEmail.addEventListener('compositionend',stripThaiEmail);
fmEmail.addEventListener('paste',e=>{e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData('text').replace(/[\u0E00-\u0E7F]/g,'');const el=fmEmail;const s=el.selectionStart??el.value.length,end=el.selectionEnd??el.value.length;el.value=el.value.slice(0,s)+t+el.value.slice(end);stripThaiEmail()});
fmEmail.addEventListener('blur',validateEmail);
}
if(fmPhone){const digitsOnly=()=>{const d=fmPhone.value.replace(/\D/g,'');if(fmPhone.value!==d)fmPhone.value=d;fmPhone.setCustomValidity('')};fmPhone.addEventListener('input',digitsOnly);fmPhone.addEventListener('paste',e=>{e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData('text').replace(/\D/g,'');fmPhone.value=(fmPhone.value+t).slice(0,15);digitsOnly()});fmPhone.addEventListener('blur',validatePhone)}
if(fmNext){const base=location.href.split(/[?#]/)[0];fmNext.value=`${base}?sent=1#contact`}
if(new URLSearchParams(location.search).get('sent')==='1'&&FM_OK){FM_OK.style.display='block';history.replaceState({},'',location.pathname+location.hash)}
FM.onsubmit=async e=>{
e.preventDefault();
if(FM.querySelector('[name="_honey"]').value)return;
if(!validateEmail()||!validatePhone()||!FM.reportValidity())return;
if(!FM.querySelector('#fm-consent').checked){FM.reportValidity();return}
FM.classList.add('sending');
FM_BTN.disabled=true;
FM_OK.style.display='none';
FM_ERR.hidden=true;
FM_PEND.hidden=true;
FM_BTN.textContent=document.documentElement.lang==='en'?'Sending…':'กำลังส่ง…';
try{
const fd=new FormData(FM);
const res=await fetch(CONTACT,{method:'POST',body:fd,headers:{Accept:'application/json'}});
const data=await res.json().catch(()=>({}));
const ok=data.success===true||data.success==='true';
if(ok){FM_OK.style.display='block';FM.reset();if(fmNext){const base=location.href.split(/[?#]/)[0];fmNext.value=`${base}?sent=1#contact`}if(typeof gtag==='function')gtag('event','generate_lead',{method:'contact_form'})}
else if(String(data.message||'').toLowerCase().includes('activation'))FM_PEND.hidden=false;
else FM_ERR.hidden=false;
}catch{FM_ERR.hidden=false}
finally{FM.classList.remove('sending');FM_BTN.disabled=false;FM_BTN.textContent=FM_LABEL}
}}
// pseudo-3D gold network
(()=>{const c=$('#cv');if(!c)return;const x=c.getContext('2d'),still=matchMedia('(prefers-reduced-motion:reduce)').matches;let W,H,P=[],a=0,mx=0;
const N=innerWidth<700?45:90;for(let i=0;i<N;i++){const u=Math.random()*6.283,v=Math.acos(2*Math.random()-1),r=.75+Math.random()*.25;P.push([r*Math.sin(v)*Math.cos(u),r*Math.cos(v),r*Math.sin(v)*Math.sin(u)])}
const rs=()=>{W=c.width=c.clientWidth;H=c.height=c.clientHeight};rs();addEventListener('resize',rs);addEventListener('pointermove',e=>mx=e.clientX/innerWidth-.5);
function f(){a+=.0028;x.clearRect(0,0,W,H);const R=Math.min(W,H)*.42,cx=W*.62,cy=H*.5,s=Math.sin(a+mx),co=Math.cos(a+mx);
const q=P.map(p=>{const X=p[0]*co-p[2]*s,Z=p[0]*s+p[2]*co,k=1/(1.9-Z*.5);return[cx+X*R*k*1.6,cy+p[1]*R*k*1.6,Z,k]});
for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){const d=Math.hypot(q[i][0]-q[j][0],q[i][1]-q[j][1]);if(d<R*.34){x.strokeStyle=`rgba(201,162,94,${(1-d/(R*.34))*.28})`;x.lineWidth=.7;x.beginPath();x.moveTo(q[i][0],q[i][1]);x.lineTo(q[j][0],q[j][1]);x.stroke()}}
q.forEach(p=>{x.fillStyle=`rgba(232,199,132,${.35+p[2]*.4})`;x.beginPath();x.arc(p[0],p[1],1+p[3]*1.6,0,6.283);x.fill()});
if(!still)requestAnimationFrame(f)}f()})();

// TH/EN
const EN={"ชั้น 22 อาคารพญาไทพลาซ่า ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400": "22nd Floor, Phayathai Plaza Building, Phayathai Road, Thung Phaya Thai, Ratchathewi, Bangkok 10400", "บริการ": "Services", "เกี่ยวกับเรา": "About", "โซลูชัน": "Solutions", "โซลูชัน AI": "AI Solutions", "บำรุงรักษารายปี": "Annual Maintenance", "ดูทั้งหมด": "View all", "พันธมิตร": "Partners", "ติดต่อเรา": "Contact", "อุตสาหกรรม": "Industries", "เกษตรกรรม": "Agriculture", "สาธารณสุข": "Healthcare", "การขนส่ง": "Transportation", "รถไฟ": "Rail", "พลังงานและสาธารณูปโภค": "Power & Utilities", "อุตสาหกรรมที่เราให้บริการ": "Industries we serve", "โซลูชันดิจิทัลตามภาคอุตสาหกรรม": "Digital solutions by industry", "Vertex ออกแบบและส่งมอบ Cloud, AI, ระบบเชื่อมต่อ และโครงสร้างพื้นฐานที่ปลอดภัย ให้สอดคล้องกับกฎระเบียบและบริบทการดำเนินงานของแต่ละภาค": "Vertex designs and delivers secure Cloud, AI, integration and infrastructure aligned with each sector’s regulations and operating context.", "IoT, ข้อมูลภาคสนาม และ AI สำหรับการผลิตที่แม่นยำ การจัดการห่วงโซ่คุณภาพ และการติดตามความยั่งยืน": "IoT, field data and AI for precision production, quality chains and sustainability tracking.", "ระบบที่เชื่อมต่อได้ ปลอดภัย และสอดคล้องมาตรฐาน — จากข้อมูลคลินิกไปจนถึงโครงสร้างพื้นฐานที่ต้องมี uptime สูง": "Connected, secure, compliant systems — from clinical data to high-uptime infrastructure.", "โซลูชันเชื่อมต่อ ติดตาม และวิเคราะห์สำหรับโลจิสติกส์ การขนส่ง และการจัดการยานพาหนะ": "Connected solutions for tracking and analytics in logistics, transport and fleet management.", "ระบบรถไฟไร้คนขับและโครงสร้างพื้นฐาน signalling — สรุปแนวโน้มและเทคโนโลยี": "Driverless rail and signalling infrastructure — trends and technology overview.", "อ่านบทความสรุป": "Read the summary", "Smart grid, SCADA, การจัดการสินทรัพย์ และความมั่นคงปลอดภัยไซเบอร์สำหรับโรงไฟฟ้าและสาธารณูปโภค": "Smart grid, SCADA, asset management and cyber security for power and utilities.", "รถไฟไร้คนขับ": "Driverless trains", "แนวโน้มและเทคโนโลยีระบบราง": "Trends in rail automation", "กลับหน้าอุตสาหกรรม": "Back to Industries", "สอบถามโซลูชัน": "Discuss solutions", "ระดับการขับขี่อัตโนมัติ (GoA)": "Grades of Automation (GoA)", "ระบบควบคุมการเดินรถ (CBTC)": "Communications-Based Train Control (CBTC)", "ประโยชน์ต่อผู้โดยสารและผู้ให้บริการ": "Benefits for passengers and operators", "บริบทอินเดียและเมโทรไร้คนขับ": "India context and driverless metro", "สรุปจากบทความ Hitachi (Insights) — ใช้เพื่อการศึกษาและอ้างอิง ไม่ใช่เอกสารทางการของ Vertex": "Summary based on a Hitachi Insights article — for reference only; not an official Vertex document.",
"แนวโน้มและเทคโนโลยีระบบราง — สรุปจากบทความ Hitachi (Insights) ใช้เพื่อการศึกษาและอ้างอิง ไม่ใช่เอกสารทางการของ Vertex": "Rail automation trends — summary of a Hitachi Insights article; for reference only, not an official Vertex document.",
"เมโทรไร้คนขับและความต้องการขนส่งมวลชน": "Driverless metro and mass-transit demand", "แหล่งที่มา": "Source", "ความปลอดภัย ความถี่ และการลดต้นทุนดำเนินงาน": "Safety, headway and lower operating costs", "GoA 0–4 อธิบายระดับการควบคุมของมนุษย์ vs ระบบอัตโนมัติ โดย GoA 4 คือการขับขี่แบบไร้คนขับตลอดเส้นทาง": "GoA 0–4 describes human vs automated control; GoA 4 is fully unattended operation.", "CBTC ใช้การสื่อสารแบบเรียลไทม์เพื่อควบคุมตำแหน่งรถ ช่วงห่าง และความเร็ว — รองรับความถี่สูงและความปลอดภัย": "CBTC uses real-time communications for train position, spacing and speed — enabling high frequency and safety.", "DMRC และโครงการเมโทรในอินเดียเป็นตัวอย่างการนำระบบไร้คนขับมาใช้เพื่อรองรับเมืองที่เติบโต": "DMRC and Indian metro projects illustrate driverless adoption for growing cities.", "Vertex สามารถให้คำปรึกษาเรื่องโครงสร้างพื้นฐานดิจิทัล OT/IT, การเชื่อมต่อ และความปลอดภัยที่เกี่ยวข้องกับระบบขนส่ง": "Vertex can advise on digital OT/IT infrastructure, integration and security for transport systems.", "ดูบริการของเรา": "Explore Services", "เฝ้าระวังและซัพพอร์ต": "Monitoring & Support", "กลุ่มบริการ ครบวงจร": "Integrated Service Groups", "Built to Rise. Built to Last. — ขับเคลื่อนด้วย Technology, People และ Sustainability": "Built to Rise. Built to Last. — Driven by Technology, People and Sustainability", "โซลูชันที่": "Solutions that are", "พร้อมใช้งานจริง": "ready for real-world use", "จาก AI ไปจนถึง Data Center และงานบำรุงรักษา — ผู้ให้บริการรายเดียวที่ดูแลครบ": "From AI to Data Centers and maintenance — one provider that covers it all.", "ร่วมงานกับพันธมิตรเทคโนโลยีระดับโลก เพื่อส่งมอบโซลูชันที่ครอบคลุม Cloud, AI, Data, Cybersecurity, Hardware และ Network": "We work with world-class technology partners to deliver solutions across Cloud, AI, Data, Cybersecurity, Hardware and Network.", "บอกเป้าหมายและความต้องการขององค์กร ทีมผู้เชี่ยวชาญของ Vertex พร้อมให้คำปรึกษาและออกแบบโซลูชันที่เหมาะสม": "Tell us your goals and needs. Vertex experts are ready to advise and design the right solution for your organization.", "ชื่อ-นามสกุล": "Full name", "บริษัท / หน่วยงาน": "Company / Organization", "อีเมล": "Email", "เบอร์ติดต่อกลับ": "Phone (for callback)", "เช่น 0812345678": "e.g. 0812345678", "สิ่งที่สนใจ": "Interested in", "ส่งข้อความ": "Send message", "ขอบคุณครับ ทีมงานจะติดต่อกลับโดยเร็วที่สุด": "Thank you. Our team will get back to you as soon as possible.",
"ส่งไม่สำเร็จ กรุณาลองอีกครั้งหรืออีเมล saleadmin@vertexinfra.co.th โดยตรง": "Could not send. Please try again or email saleadmin@vertexinfra.co.th directly",
"ฟอร์มกำลังรอเปิดใช้งาน ทีม Vertex จะตรวจสอบอีเมล saleadmin@vertexinfra.co.th — หากเร่งด่วนโปรดอีเมลโดยตรง": "The form is pending activation. Our team will confirm saleadmin@vertexinfra.co.th — for urgent requests, please email us directly.",
"กำลังส่ง…": "Sending…",
"นโยบายความเป็นส่วนตัว": "Privacy Policy",
"ข้าพเจ้ายินยอมให้ Vertex เก็บและใช้ข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อติดต่อกลับ ตาม": "I consent to Vertex collecting and using my personal data to contact me, as described in the",
"นโยบายความเป็นส่วนตัว (PDPA)": "Privacy Policy (PDPA)", "ภาพขยาย": "Enlarged image", "เมนู": "Menu", "Data center และเมืองดิจิทัลยามค่ำคืน": "Data center and digital city at night", "เช่น Cloud, AI Chatbot, ERP, Data Center, Annual Maintenance": "e.g. Cloud, AI Chatbot, ERP, Data Center, Annual Maintenance", "ดูรายละเอียดฉบับเต็ม": "View full details", "AI Chatbot และโซลูชัน AI ครบวงจร": "AI Chatbot and End-to-End AI Solutions", "เพิ่มประสิทธิภาพ ลดต้นทุน และขับเคลื่อนธุรกิจสู่อนาคต ด้วยเทคโนโลยี AI ชั้นสูงผสานความเชี่ยวชาญเชิงธุรกิจ": "Boost efficiency, cut costs and drive your business into the future with advanced AI combined with deep business expertise.", "ตอบคำถามอัตโนมัติ ตลอด 24/7": "Automated answers around the clock, 24/7", "เชื่อมต่อข้อมูลจากหลายระบบ (ERP, CRM, Document, Website)": "Connects data across systems (ERP, CRM, Document, Website)", "รองรับภาษาไทยและหลายภาษา": "Supports Thai and multiple languages", "ปรับแต่งให้ตรงกับธุรกิจของคุณ": "Tailored to your business", "ปลอดภัยด้วยมาตรฐานระดับองค์กร": "Secured to enterprise-grade standards", "เพิ่มประสิทธิภาพการทำงาน": "Higher operational efficiency", "ลดต้นทุนการดำเนินงาน": "Lower operating costs", "ลดเวลาในการทำงาน": "Less time spent on work", "Data Center Solutions — โครงสร้างพื้นฐานดิจิทัลที่พร้อมรองรับอนาคต": "Data Center Solutions — Digital infrastructure ready for the future", "บริการออกแบบ สร้าง และดูแล Data Center แบบครบวงจร ด้วยมาตรฐานระดับสากล (TIA, Uptime, ISO)": "End-to-end design, build and operation of Data Centers to international standards (TIA, Uptime, ISO).", "ทีมวิศวกรและผู้เชี่ยวชาญเฉพาะทาง ออกแบบตามความต้องการของธุรกิจ": "Specialist engineers design to your business needs", "รองรับการขยายตัวในอนาคต (Scalable)": "Scalable for future growth", "บริการครบวงจรจาก Single Partner": "Complete services from a single partner", "One Partner. Complete Care. ดูแลระบบของคุณตลอดปี ครอบคลุมทั้งฮาร์ดแวร์และซอฟต์แวร์ โดยทีมผู้เชี่ยวชาญ": "One Partner. Complete Care. Year-round care for your systems, covering both hardware and software, by expert teams."},ATT=['alt','aria-label','placeholder'],MD=document.querySelector('meta[name=description]'),MT=MD?MD.content:'';
function lang(l){const en=l==='en';document.documentElement.lang=l;
const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)?2:1});
for(let n;n=w.nextNode();){if(n._o===undefined){if(!/[\u0E00-\u0E7F]/.test(n.nodeValue))continue;n._o=n.nodeValue}
const k=n._o.trim(),t=EN[k];n.nodeValue=en&&t?n._o.replace(k,t):n._o}
document.querySelectorAll('[alt],[aria-label],[placeholder]').forEach(e=>ATT.forEach(a=>{const v=e.getAttribute(a);if(v===null)return;e['_'+a]=e['_'+a]??v;const t=EN[e['_'+a]];e.setAttribute(a,en&&t?t:e['_'+a])}));
if(MD)MD.content=en?'Vertex Infrastructure provides Cloud, AI, Data Center, ERP, Cyber Security and Managed Services end to end — Built to Rise. Built to Last.':MT;document.querySelectorAll('.lt button').forEach(b=>b.classList.toggle('on',b.dataset.l===l))}
const lt=document.querySelector('.lt');if(lt)lt.onclick=e=>{const b=e.target.closest('[data-l]');if(b)lang(b.dataset.l)};
(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.rv').forEach(el=>io.observe(el))})();