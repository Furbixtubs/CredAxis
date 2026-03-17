import { useState } from "react";
import {
  PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

const riskPie = [
  { name: "High Risk", value: 65, color: "#f87171" },
  { name: "Medium",    value: 20, color: "#fbbf24" },
  { name: "Low",       value: 15, color: "#818cf8" },
];

const timeline = [
  {m:"Jun",s:50000},{m:"Jul",s:80000},{m:"Aug",s:120000},{m:"Sep",s:160000},
  {m:"Oct",s:200000},{m:"Nov",s:260000},{m:"Dec",s:300000},{m:"Jan",s:340000},
  {m:"Feb",s:370000},{m:"Mar",s:390000},{m:"Apr",s:420000},{m:"May",s:460000},
  {m:"Jun",s:500000},{m:"Jul",s:540000},{m:"Aug",s:580000},{m:"Sep",s:620000},
  {m:"Oct",s:650000},{m:"Nov",s:670000},{m:"Dec",s:700000},
];

const S = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');
.rbs-page{font-family:'Roboto',sans-serif;background:transparent;min-height:100vh;padding:20px}
.rbs-header-card{background:#1e2a3a;border-radius:12px;padding:16px 20px;margin-bottom:16px;position:relative}
.rbs-header-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.rbs-back{font-size:12px;color:#9ca3af;background:none;border:none;cursor:pointer;font-family:'Roboto',sans-serif;display:flex;align-items:center;gap:4px}
.rbs-back:hover{color:#fff}
.rbs-dots{background:none;border:none;cursor:pointer;color:#9ca3af;font-size:18px;padding:0;line-height:1}
.rbs-header-body{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.rbs-header-cols{display:grid;grid-template-columns:1fr 1fr;gap:8px 32px;flex:1}
.rbs-hrow{display:flex;flex-direction:column;gap:2px}
.rbs-hlbl{font-size:11px;color:#6b7280;font-weight:400;font-family:'Roboto',sans-serif}
.rbs-hval{font-size:13px;color:#f3f4f6;font-weight:600;font-family:'Poppins',sans-serif}
.rbs-photo{width:64px;height:64px;border-radius:8px;object-fit:cover;border:2px solid #374151;flex-shrink:0}
.rbs-badges{display:flex;gap:6px;margin-top:4px;flex-wrap:wrap}
.rbadge{padding:6px 18px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;border:none;font-family:'Poppins',sans-serif;flex-shrink:0;transition:opacity .2s}
.rbadge:hover{opacity:.85}
.rbadge-ap{background:#22c55e;color:#fff}
.rbadge-rj{background:#ef4444;color:#fff}
.rbadge-mn{background:transparent;color:#9ca3af;border:1px solid #4b5563}
.rbs-risk-title{text-align:center;font-size:11px;font-weight:600;color:#374151;margin-bottom:12px;letter-spacing:.02em;font-family:'Poppins',sans-serif}
.rbs-risk-row{display:grid;grid-template-columns:1.15fr 1fr 1fr 1fr 1fr;gap:10px;margin-bottom:12px;align-items:stretch}
.rbs-dist-card{background:#1e3a5f;border-radius:20px;padding:14px 12px;display:flex;flex-direction:column;gap:10px;min-height:160px}
.rbs-dist-title{font-size:8px;font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.05em;font-family:'Roboto',sans-serif}
.rbs-dist-body{display:flex;align-items:center;gap:7px;flex:1}
.rbs-legend{display:flex;flex-direction:column;gap:4px}
.rbs-leg{display:flex;align-items:center;gap:4px;font-size:8px;color:rgba(255,255,255,.7);font-family:'Roboto',sans-serif}
.rbs-dot{width:6px;height:6px;border-radius:1px;flex-shrink:0}
.rbs-metric{border-radius:20px;padding:14px 13px;display:flex;flex-direction:column;justify-content:space-between;min-height:160px}
.rbs-m-navy{background:#1e3a5f}
.rbs-m-red{background:#991b1b}
.rbs-m-olive{background:#0f766e}
.rbs-m-indigo{background:#3730a3}
.rbs-m-lbl{font-size:9px;font-weight:600;color:rgba(255,255,255,.6);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px;font-family:'Roboto',sans-serif}
.rbs-m-val{font-size:24px;font-weight:700;color:#fff;line-height:1;font-family:'Poppins',sans-serif}
.rbs-m-sub{font-size:9px;color:rgba(255,255,255,.6);margin-top:3px;font-family:'Roboto',sans-serif}
.rbs-m-tag{display:inline-block;font-size:8px;font-weight:600;padding:2px 8px;border-radius:3px;margin-top:5px;background:rgba(0,0,0,.25);color:rgba(255,255,255,.9);font-family:'Poppins',sans-serif}
.rbs-m-bullet{width:8px;height:8px;border-radius:50%;background:#fff;margin-bottom:4px}
.rbs-two{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.rbs-dark-card{background:#1e3a5f;border-radius:14px;padding:13px 14px}
.rbs-dc-title{font-size:10px;font-weight:600;color:rgba(255,255,255,.85);margin-bottom:10px;text-align:center;font-family:'Poppins',sans-serif}
.rbs-alt-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rbs-alt-lbl{font-size:8px;font-weight:700;color:rgba(255,255,255,.85);margin-bottom:3px;font-family:'Poppins',sans-serif}
.rbs-alt-li{font-size:8px;color:rgba(255,255,255,.6);line-height:1.6;list-style:disc;margin-left:11px;font-family:'Roboto',sans-serif}
.rbs-alt-score{font-size:9px;font-weight:700;color:rgba(255,255,255,.9);margin-top:4px;font-family:'Poppins',sans-serif}
.rbs-tl-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.rbs-tabs{display:flex;gap:3px}
.rbs-tab{font-size:8px;font-weight:600;padding:2px 7px;border-radius:3px;border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.55);cursor:pointer;background:none;font-family:'Roboto',sans-serif}
.rbs-tab.on{background:#3b82f6;border-color:#3b82f6;color:#fff}
.rbs-drv-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.rbs-drv-title{font-size:8px;font-weight:700;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.04em;margin-bottom:7px;font-family:'Poppins',sans-serif}
.rbs-drv-li{font-size:8px;color:rgba(255,255,255,.75);line-height:1.8;list-style:disc;margin-left:11px;font-family:'Roboto',sans-serif}
.rbs-drv-pos{font-size:8px;color:#4ade80;font-family:'Roboto',sans-serif}
.rbs-note-text{font-size:10px;color:rgba(255,255,255,.8);line-height:1.7;font-style:italic;font-family:'Roboto',sans-serif}
`;

export default function RejectedBorrowerScoring() {
  const [tab, setTab] = useState("All");
  const [showRejected, setShowRejected] = useState(false);
  const [showApproved, setShowApproved] = useState(false);

  return (
    <>
      <style>{S}</style>
      <div className="rbs-page">

        {/* Header Card */}
        <div className="rbs-header-card">
          <div className="rbs-header-top">
            <button className="rbs-back">← Back</button>
            <button className="rbs-dots">•••</button>
          </div>
          <div className="rbs-header-body">
            <div className="rbs-header-cols">
              <div className="rbs-hrow">
                <span className="rbs-hlbl">Customer Name:</span>
                <span className="rbs-hval">Mr. Chika Emeka</span>
              </div>
              <div className="rbs-hrow">
                <span className="rbs-hlbl">Customer ID:</span>
                <span className="rbs-hval">CRD-20486</span>
              </div>
              <div className="rbs-hrow">
                <span className="rbs-hlbl">Phone Number:</span>
                <span className="rbs-hval">+2348038570000</span>
              </div>
              <div className="rbs-hrow">
                <span className="rbs-hlbl">Application Date:</span>
                <span className="rbs-hval">20 March 2026</span>
              </div>
              <div className="rbs-hrow" style={{gridColumn:"1/-1"}}>
                <span className="rbs-hlbl">Application Status:</span>
                <div className="rbs-badges">
                  <button className="rbadge rbadge-ap" onClick={()=>setShowApproved(true)}>Approve</button>
                  <button className="rbadge rbadge-rj" onClick={()=>setShowRejected(true)}>Reject</button>
                  <button className="rbadge rbadge-mn">Manual Review</button>
                </div>
              </div>
            </div>
            <img src="https://i.pravatar.cc/100?img=11" className="rbs-photo" alt="customer" />
          </div>
        </div>

        {/* Risk Summary */}
        <div className="rbs-risk-title">Risk Summary</div>
        <div className="rbs-risk-row">

          <div className="rbs-dist-card">
            <div className="rbs-dist-title">Risk Distribution</div>
            <div className="rbs-dist-body">
              <div style={{position:"relative",width:64,height:64,flexShrink:0}}>
                <PieChart width={64} height={64}>
                  <Pie data={riskPie} cx={28} cy={28} innerRadius={18} outerRadius={30}
                    startAngle={90} endAngle={-270} dataKey="value" strokeWidth={0}>
                    {riskPie.map((e,i)=><Cell key={i} fill={e.color}/>)}
                  </Pie>
                </PieChart>
                <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",textAlign:"center"}}>
                  <div style={{fontSize:10,fontWeight:700,color:"#f87171",fontFamily:"'Poppins',sans-serif"}}>65%</div>
                </div>
              </div>
              <div className="rbs-legend">
                {riskPie.map((d,i)=>(
                  <div className="rbs-leg" key={i}>
                    <div className="rbs-dot" style={{background:d.color}}/>
                    {d.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rbs-metric rbs-m-navy">
            <div className="rbs-m-lbl">Risk Score</div>
            <div>
              <div className="rbs-m-sub">Score: 90/100</div>
              <div className="rbs-m-sub">Risk Level: High</div>
            </div>
            <div style={{marginTop:8,position:"relative",paddingBottom:20}}>
              <div style={{height:8,background:"rgba(255,255,255,.25)",borderRadius:10}}>
                <div style={{width:"90%",height:"100%",background:"#ef4444",borderRadius:10}}/>
              </div>
              <div style={{
                position:"absolute",
                left:"90%",
                top:"6px",
                transform:"translateX(-50%)",
                width:0,height:0,
                borderLeft:"2px solid transparent",
                borderRight:"2px solid transparent",
                borderBottom:"10px solid #fff",
                zIndex:10
              }}/>
              <div style={{marginTop:6,paddingLeft:"87%",fontSize:8,fontWeight:700,color:"#fff",fontFamily:"'Roboto',sans-serif"}}>90</div>
            </div>
          </div>

          <div className="rbs-metric rbs-m-red">
            <div className="rbs-m-lbl">Probability of Default</div>
            <div>
              <div className="rbs-m-val" style={{fontSize:28}}>80%</div>
              <div className="rbs-m-sub">High Risk</div>
            </div>
          </div>

          <div className="rbs-metric rbs-m-olive">
            <div className="rbs-m-lbl">Recommended Limit</div>
            <div>
              <div className="rbs-m-bullet"/>
              <div className="rbs-m-val" style={{fontSize:17}}>₦50,000</div>
            </div>
          </div>

          <div className="rbs-metric rbs-m-indigo">
            <div className="rbs-m-lbl">Decision Confidence</div>
            <div>
              <div className="rbs-m-bullet"/>
              <div className="rbs-m-val" style={{fontSize:17}}>Low</div>
            </div>
          </div>
        </div>

        {/* Alt Score + Timeline */}
        <div className="rbs-two">
          <div className="rbs-dark-card">
            <div className="rbs-dc-title">Alternative Data Score Breakdown</div>
            <div className="rbs-alt-grid">
              <div>
                <div className="rbs-alt-lbl">Mobile Behavior Score</div>
                <ul>
                  <li className="rbs-alt-li">SIM instability</li>
                  <li className="rbs-alt-li">Frequent device Change</li>
                </ul>
                <div className="rbs-alt-score" style={{color:"#f87171"}}>Score: 15/100</div>
              </div>
              <div>
                <div className="rbs-alt-lbl">Financial Behavior Score</div>
                <ul>
                  <li className="rbs-alt-li">Mobile money transaction</li>
                  <li className="rbs-alt-li">Wallet balance trend</li>
                  <li className="rbs-alt-li">Bad spending pattern</li>
                </ul>
                <div className="rbs-alt-score" style={{color:"#fbbf24"}}>Score: 40/100</div>
              </div>
              <div style={{marginTop:8}}>
                <div className="rbs-alt-lbl">Identity Verification Score</div>
                <ul>
                  <li className="rbs-alt-li">BVN/NID verified</li>
                  <li className="rbs-alt-li">Phone match</li>
                  <li className="rbs-alt-li">Device match</li>
                </ul>
                <div className="rbs-alt-score" style={{color:"#4ade80"}}>Score: 60/100</div>
              </div>
              <div style={{marginTop:8}}>
                <div className="rbs-alt-lbl">Digital Footprint Score</div>
                <ul>
                  <li className="rbs-alt-li">Location instability</li>
                  <li className="rbs-alt-li">Low trace of online payments</li>
                </ul>
                <div className="rbs-alt-score" style={{color:"#f87171"}}>Score: 20/100</div>
              </div>
            </div>
          </div>

          <div className="rbs-dark-card">
            <div className="rbs-tl-hdr">
              <div className="rbs-dc-title" style={{margin:0}}>Credit Timeline</div>
              <div className="rbs-tabs">
                {["1M","3M","6M","All"].map(t=>(
                  <button key={t} className={`rbs-tab${tab===t?" on":""}`} onClick={()=>setTab(t)}>{t}</button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={155}>
              <AreaChart data={timeline} margin={{top:4,right:4,left:10,bottom:0}}>
                <defs>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.06)"/>
                <XAxis dataKey="m" tick={{fontSize:8,fill:"rgba(255,255,255,.4)"}} axisLine={false} tickLine={false}/>
                <YAxis tickFormatter={(v)=>`${v/1000}k`} tick={{fontSize:8,fill:"rgba(255,255,255,.4)"}} axisLine={false} tickLine={false}/>
                <Tooltip
                  formatter={(v)=>[`₦${v.toLocaleString()}`,""]}
                  contentStyle={{background:"#1e2d4a",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,fontSize:10,color:"#fff"}}
                  labelStyle={{color:"rgba(255,255,255,.6)"}}
                  itemStyle={{color:"#93c5fd"}}
                />
                <Area type="monotone" dataKey="s" stroke="#ef4444" strokeWidth={2}
                  fill="url(#blueGrad)" dot={false} activeDot={{r:4,fill:"#ef4444"}}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Drivers + Analyst Notes */}
        <div className="rbs-two">
          <div className="rbs-dark-card">
            <div className="rbs-dc-title" style={{textAlign:"left"}}>Risk Drivers</div>
            <div className="rbs-drv-grid">
              <div>
                <div className="rbs-drv-title">Positive Signals</div>
                <div className="rbs-drv-pos">• Verified identity</div>
              </div>
              <div>
                <div className="rbs-drv-title">Risk Flags</div>
                <ul>
                  <li className="rbs-drv-li">Limited credit history</li>
                  <li className="rbs-drv-li">Income variability</li>
                  <li className="rbs-drv-li">Unverifiable income</li>
                  <li className="rbs-drv-li">Low trace of repaid loan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rbs-dark-card">
            <div className="rbs-dc-title" style={{textAlign:"left"}}>Analyst Notes</div>
            <div className="rbs-note-text">
              "Customer has a very high chance of defaulting on applied loan due to his low financial behavior and digital footprint."
            </div>
          </div>
        </div>

        {/* Approve Modal */}
        {showApproved && (
          <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,.97)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,flexDirection:"column",gap:24}}>
            <div style={{width:90,height:90,borderRadius:"50%",background:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(34,197,94,.4)"}}>
              <span style={{color:"#fff",fontSize:44,lineHeight:1}}>✓</span>
            </div>
            <div style={{fontSize:22,color:"#22c55e",fontWeight:600,fontFamily:"'Poppins',sans-serif"}}>Loan Approved!</div>
            <button onClick={()=>setShowApproved(false)} style={{background:"#1e3a5f",color:"#fff",border:"none",borderRadius:24,padding:"12px 48px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'Poppins',sans-serif"}}>Done</button>
          </div>
        )}

        {/* Reject Modal */}
        {showRejected && (
          <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(255,255,255,.97)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,flexDirection:"column",gap:24}}>
            <div style={{width:90,height:90,borderRadius:"50%",background:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 24px rgba(239,68,68,.4)"}}>
              <span style={{color:"#fff",fontSize:44,lineHeight:1}}>✕</span>
            </div>
            <div style={{fontSize:22,color:"#ef4444",fontWeight:600,fontFamily:"'Poppins',sans-serif"}}>Loan Rejected!</div>
            <button onClick={()=>setShowRejected(false)} style={{background:"#1e3a5f",color:"#fff",border:"none",borderRadius:24,padding:"12px 48px",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'Poppins',sans-serif"}}>Done</button>
          </div>
        )}

      </div>
    </>
  );
}