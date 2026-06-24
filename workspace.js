/* Reading Workspace controller — renders 7 tabs from shared data for a chosen topic. */
(function(){
  var params=new URLSearchParams(location.search);
  var current=params.get('t')||'quant';
  var loadedQuiz=false, flashState=null;

  function topicMeta(id){ return TOPICS.find(function(t){return t.id===id;})||TOPICS[0]; }

  // Build topic dropdown
  var sel=document.getElementById('topicSelect');
  TOPICS.forEach(function(t){
    var o=document.createElement('option');o.value=t.id;o.textContent=t.num+' · '+t.name;
    if(t.id===current) o.selected=true;
    sel.appendChild(o);
  });
  sel.onchange=function(){ current=sel.value; render(); history.replaceState(null,'','workspace.html?t='+current); resetTab(); };

  // Tabs
  document.querySelectorAll('.tab').forEach(function(tab){
    tab.onclick=function(){
      document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
      document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');});
      tab.classList.add('active');
      var id='panel-'+tab.dataset.tab;
      document.getElementById(id).classList.add('active');
      if(tab.dataset.tab==='quiz' && !loadedQuiz) loadQuiz();
    };
  });
  function resetTab(){
    document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
    document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active');});
    document.querySelector('.tab[data-tab=overview]').classList.add('active');
    document.getElementById('panel-overview').classList.add('active');
    loadedQuiz=false;
    document.getElementById('quizApp').innerHTML='';
  }

  function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;');}

  function render(){
    var m=topicMeta(current);
    var c=CONTENT[current]||{};
    document.getElementById('wsNum').textContent=m.num;
    document.getElementById('wsTitle').textContent=m.name;
    document.getElementById('wsBlurb').textContent=m.blurb||'';

    // OVERVIEW
    var P=richPacket();
    var hw=(c.handwritten||[]).length, fc=(c.flashcards||[]).length;
    var qz=(QUIZZES[current]||{questions:[]}).questions.length;
    var pkLabel, fxLabel, fxCount;
    if(P){
      var concepts=0, formulas=0;
      P.sections.forEach(function(s){ concepts+=s.concepts.length; s.concepts.forEach(function(x){if(x.formula)formulas++;}); });
      pkLabel=P.sections.length+' sections · '+concepts+' concepts';
      fxLabel=formulas+' formulas (full handbook)'; fxCount=formulas;
    } else {
      pkLabel=(c.packet||[]).length+' sections';
      fxCount=(FORMULAS[current]||[]).length; fxLabel=fxCount+' formulas';
    }
    document.getElementById('panel-overview').innerHTML=
      '<div class="packet-block"><h4>'+esc(m.name)+'</h4>'+
      '<p style="color:var(--muted)">Exam weight: <b style="color:var(--rose)">'+m.weight+'</b>'+
        (P?'  ·  <span style="color:var(--accent-2)">Built from your Kaplan handout</span>':'')+'</p>'+
      '<p>'+esc(m.blurb)+'</p>'+
      '<div class="grid" style="margin-top:18px">'+
        ovCard('Handwritten Notes',hw+' condensed cards','handwritten')+
        (fxCount?ovCard('Formula Handbook',fxLabel,'formula'):'')+
        ovCard('Study Packet',pkLabel,'packet')+
        ovCard('Quiz',qz+' questions','quiz')+
        ovCard('Flashcards',fc+' cards','flash')+
        ovCard('Progress','Your accuracy','progress')+
      '</div></div>';

    renderHandwritten(c.handwritten||[]);
    renderFormula(FORMULAS[current]||[]);
    renderPacket(c.packet||[]);
    renderFlash(c.flashcards||[]);
    renderProgress();
  }

  function richPacket(){ return (window.PACKETS && window.PACKETS[current]) ? window.PACKETS[current] : null; }

  function ovCard(title,sub,tab){
    return '<div class="card" style="cursor:pointer" onclick="(function(){document.querySelector(\'.tab[data-tab=\\\''+tab+'\\\']\').click();})()">'+
      '<h3>'+title+'</h3><p>'+sub+'</p>'+
      '<div class="links"><a class="pill">Open &rarr;</a></div></div>';
  }

  function renderHandwritten(cards){
    if(!cards.length){document.getElementById('panel-handwritten').innerHTML='<p class="empty-note">No notes yet.</p>';return;}
    var html='<p style="color:var(--muted);margin-top:0">Formula-first, minimum writing. The page you physically handwrite. <button class="fc-btn" onclick="window.print()" style="margin-left:8px">🖨 Print</button></p><div class="hw-grid">';
    cards.forEach(function(k){
      html+='<div class="hw-card"><h4>'+esc(k.title)+'</h4>';
      if(k.formula) html+='<div class="fx-line">'+esc(k.formula)+'</div>';
      if(k.shortcut) html+='<div class="lab">Shortcut</div><div>'+esc(k.shortcut)+'</div>';
      if(k.relationship) html+='<div class="lab">Relationship</div><div>'+esc(k.relationship)+'</div>';
      if(k.trap) html+='<div class="lab" style="color:#d9534f">Exam trap</div><div>'+esc(k.trap)+'</div>';
      if(k.visual) html+='<div class="pic">📌 Picture: '+esc(k.visual)+'</div>';
      html+='</div>';
    });
    html+='</div>';
    document.getElementById('panel-handwritten').innerHTML=html;
  }

  function renderFormula(rows){
    var panel=document.getElementById('panel-formula');
    var P=richPacket();
    // Build a Formula Handbook from the rich packet if available
    if(P){
      var blocks=[];
      P.sections.forEach(function(sec){
        sec.concepts.forEach(function(con){
          if(con.formula) blocks.push(con);
        });
      });
      if(blocks.length){
        var html='<p style="color:var(--muted);margin-top:0">Formula Handbook — '+blocks.length+' formulas, 100% coverage. '+
          '<button class="fc-btn" onclick="window.print()">🖨 Print</button></p>';
        blocks.forEach(function(con){
          html+='<div class="fh-block"><div class="fh-name">'+esc(con.name)+'</div>'+
            '<div class="fh-formula">'+esc(con.formula)+'</div>';
          if(con.variables && con.variables.length){
            html+='<ul class="fh-vars">';
            con.variables.forEach(function(v){ html+='<li>'+esc(v)+'</li>'; });
            html+='</ul>';
          }
          html+='</div>';
        });
        panel.innerHTML=html;
        return;
      }
    }
    // fallback to simple table
    if(!rows.length){panel.innerHTML='<p class="empty-note">This topic is conceptual — no formula sheet.</p>';return;}
    var h='<p style="color:var(--muted);margin-top:0"><button class="fc-btn" onclick="window.print()">🖨 Print formula sheet</button></p><table class="formulas"><tr><th>Concept</th><th>Formula</th></tr>';
    rows.forEach(function(r){ h+='<tr><td>'+esc(r[0])+'</td><td class="fx">'+esc(r[1])+'</td></tr>'; });
    h+='</table>';
    panel.innerHTML=h;
  }

  function renderPacket(secs){
    var panel=document.getElementById('panel-packet');
    var P=richPacket();
    if(P){
      var html='<p style="color:var(--muted);margin-top:0">Study Packet — built from your Kaplan Masterclass handout. '+
        '<button class="fc-btn" onclick="window.print()">🖨 Print</button></p>';
      P.sections.forEach(function(sec){
        html+='<div class="packet-block"><h4>'+esc(sec.id)+' '+esc(sec.title)+'</h4>';
        sec.concepts.forEach(function(con){
          html+='<div class="concept"><div class="concept-name">'+esc(con.name)+'</div>';
          if(con.definition) html+=row('Definition',con.definition);
          if(con.intuition) html+=row('Intuition',con.intuition);
          if(con.formula){
            html+='<div class="concept-formula">'+esc(con.formula)+'</div>';
            if(con.variables && con.variables.length){
              html+='<ul class="fh-vars">';
              con.variables.forEach(function(v){ html+='<li>'+esc(v)+'</li>'; });
              html+='</ul>';
            }
          }
          if(con.examNotes && con.examNotes.length){
            html+='<div class="packet-row trap"><span class="tag">Exam notes</span><span><ul style="margin:0;padding-left:18px">';
            con.examNotes.forEach(function(n){ html+='<li>'+esc(n)+'</li>'; });
            html+='</ul></span></div>';
          }
          if(con.uses) html+=row('When to use',con.uses);
          html+='</div>';
        });
        html+='</div>';
      });
      // memorization sheet
      if(P.memorization && P.memorization.length){
        html+='<div class="packet-block" style="border-left:4px solid var(--rose)"><h4>⚡ Quick Memorization Sheet</h4><ul>';
        P.memorization.forEach(function(m){ html+='<li>'+esc(m)+'</li>'; });
        html+='</ul></div>';
      }
      // abbreviations
      if(P.abbreviations && P.abbreviations.length){
        html+='<div class="packet-block"><h4>Abbreviations</h4><table class="formulas"><tr><th>Abbr.</th><th>Meaning</th></tr>';
        P.abbreviations.forEach(function(a){ html+='<tr><td>'+esc(a[0])+'</td><td>'+esc(a[1])+'</td></tr>'; });
        html+='</table></div>';
      }
      panel.innerHTML=html;
      return;
    }
    // fallback to old simple packet
    if(!secs.length){panel.innerHTML='<p class="empty-note">No study packet yet.</p>';return;}
    var h='';
    secs.forEach(function(s){
      h+='<div class="packet-block"><h4>'+esc(s.heading)+'</h4>';
      if(s.definition) h+=row('Definition',s.definition);
      if(s.intuition) h+=row('Intuition',s.intuition);
      if(s.relationships) h+=row('Relationships',s.relationships);
      if(s.mistakes) h+=row('Mistakes',s.mistakes);
      if(s.trap) h+=row('CFA trap',s.trap,true);
      h+='</div>';
    });
    panel.innerHTML=h;
  }
  function row(tag,val,trap){
    return '<div class="packet-row'+(trap?' trap':'')+'"><span class="tag">'+tag+'</span><span>'+esc(val)+'</span></div>';
  }

  function loadQuiz(){
    var qz=QUIZZES[current];
    if(!qz){document.getElementById('quizApp').innerHTML='<p class="empty-note">No quiz for this topic yet.</p>';return;}
    var q=JSON.parse(JSON.stringify(qz)); q.topicId=current;
    startQuiz(q); loadedQuiz=true;
  }

  /* ===== Flashcards ===== */
  function renderFlash(cards){
    var panel=document.getElementById('panel-flash');
    if(!cards.length){panel.innerHTML='<p class="empty-note">No flashcards yet.</p>';return;}
    flashState={i:0,known:0,cards:cards,done:[]};
    panel.innerHTML='<div class="fc-stage">'+
      '<div class="fc-meta" id="fcMeta"></div>'+
      '<div class="flashcard" id="flashcard"><div class="fc-inner">'+
        '<div class="fc-face fc-front"><div><div class="t" id="fcFront"></div><div class="fc-hint">click to flip</div></div></div>'+
        '<div class="fc-face fc-back"><div><span id="fcBack"></span><div class="fc-hint">click to flip</div></div></div>'+
      '</div></div>'+
      '<div class="fc-controls">'+
        '<button class="fc-btn dunno" id="fcDunno">Still learning</button>'+
        '<button class="fc-btn know" id="fcKnow">I knew it ✓</button>'+
      '</div></div>';
    var fcEl=document.getElementById('flashcard');
    fcEl.onclick=function(){ fcEl.classList.toggle('flipped'); };
    document.getElementById('fcKnow').onclick=function(e){e.stopPropagation();flashNext(true);};
    document.getElementById('fcDunno').onclick=function(e){e.stopPropagation();flashNext(false);};
    showFlash();
  }
  function showFlash(){
    var s=flashState, c=s.cards[s.i];
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('fcFront').textContent=c.front;
    document.getElementById('fcBack').textContent=c.back;
    document.getElementById('fcMeta').textContent='Card '+(s.i+1)+' of '+s.cards.length+'  ·  known: '+s.known;
  }
  function flashNext(known){
    var s=flashState;
    if(known) s.known++;
    if(s.i<s.cards.length-1){ s.i++; showFlash(); }
    else {
      cfaRecordFlashcards(current,s.known,s.cards.length);
      document.getElementById('panel-flash').innerHTML=
        '<div class="result"><div class="score">'+Math.round(s.known/s.cards.length*100)+'%</div>'+
        '<div class="msg">You knew '+s.known+' of '+s.cards.length+' cards.</div>'+
        '<button class="btn" onclick="(function(){document.querySelector(\'.tab[data-tab=flash]\').click();})();location.reload()">Restart deck</button></div>';
    }
  }

  function renderProgress(){
    var p=cfaLoadProgress(); var t=(p.topics&&p.topics[current])||null;
    var f=(p.flash&&p.flash[current])||null;
    var html='<div class="packet-block"><h4>Your progress — '+esc(topicMeta(current).name)+'</h4>';
    if(t){
      var acc=t.total?Math.round(t.correct/t.total*100):0;
      html+='<div class="kpi-grid">'+
        kpi(acc+'%','Quiz accuracy')+
        kpi(t.attempts,'Quizzes taken')+
        kpi(t.correct+'/'+t.total,'Correct / answered')+
        (f?kpi(Math.round(f.known/f.total*100)+'%','Flashcards known'):'')+
      '</div>';
      if(acc<70) html+='<p style="color:#d9534f"><b>Weak area.</b> Review the Handwritten Notes and Study Packet, then retake the quiz.</p>';
      else html+='<p style="color:#3a9b7e"><b>Strong.</b> Keep it warm with the flashcards.</p>';
    } else {
      html+='<p class="empty-note">Take the quiz to start tracking your accuracy on this topic.</p>';
    }
    html+='<p style="margin-top:14px"><a class="pill" href="dashboard.html">See full dashboard &rarr;</a></p></div>';
    document.getElementById('panel-progress').innerHTML=html;
  }
  function kpi(big,lbl){ return '<div class="kpi"><div class="big">'+big+'</div><div class="lbl">'+lbl+'</div></div>'; }

  render();
})();
