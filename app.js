/* ===== Shared UI ===== */
// Mobile nav toggle
function toggleNav(){document.getElementById('navLinks').classList.toggle('open');}

// Highlight active nav link based on filename
document.addEventListener('DOMContentLoaded',function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href=a.getAttribute('href');
    if(href===path||(path==='index.html'&&href==='index.html')) a.classList.add('active');
  });
});

/* ===== Quiz engine =====
   Expects a global QUIZ = { title, topic, questions:[{q, options:[], answer:index, explain}] }
   and a container <div id="quizApp"></div>
*/
function startQuiz(QUIZ){
  var app=document.getElementById('quizApp');
  if(!app||!QUIZ) return;
  var i=0, score=0, answered=false;

  function render(){
    answered=false;
    var q=QUIZ.questions[i];
    var pct=Math.round((i)/QUIZ.questions.length*100);
    app.innerHTML=
      '<div class="quiz-meta"><span>Question '+(i+1)+' of '+QUIZ.questions.length+'</span>'+
      '<span>Score: '+score+'</span></div>'+
      '<div class="progress"><span style="width:'+pct+'%"></span></div>'+
      '<div class="q-text">'+q.q+'</div>'+
      '<div class="options" id="opts"></div>'+
      '<div class="explain" id="explain"></div>'+
      '<div class="quiz-nav"><span></span>'+
      '<button class="btn" id="nextBtn" style="display:none">'+
      (i===QUIZ.questions.length-1?'See results':'Next question')+'</button></div>';
    var opts=document.getElementById('opts');
    q.options.forEach(function(opt,idx){
      var b=document.createElement('button');
      b.className='opt';b.innerHTML=opt;
      b.onclick=function(){choose(idx,q);};
      opts.appendChild(b);
    });
  }
  function choose(idx,q){
    if(answered) return; answered=true;
    var btns=document.querySelectorAll('#opts .opt');
    btns.forEach(function(b,k){
      b.classList.add('disabled');
      if(k===q.answer) b.classList.add('correct');
      if(k===idx&&idx!==q.answer) b.classList.add('wrong');
    });
    if(idx===q.answer) score++;
    var ex=document.getElementById('explain');
    ex.innerHTML='<b>'+(idx===q.answer?'Correct. ':'Not quite. ')+'</b>'+q.explain;
    ex.classList.add('show');
    document.getElementById('nextBtn').style.display='inline-block';
  }
  function next(){
    if(i<QUIZ.questions.length-1){i++;render();}
    else results();
  }
  function results(){
    var pct=Math.round(score/QUIZ.questions.length*100);
    var msg = pct>=80?"Excellent — you're exam-ready on this topic!":
              pct>=60?"Solid. Review the misses and run it again.":
              "Keep going — revisit the notes, then retry. Progress beats perfection.";
    app.innerHTML='<div class="result"><div class="score">'+pct+'%</div>'+
      '<div class="msg">'+score+' / '+QUIZ.questions.length+' correct. '+msg+'</div>'+
      '<button class="btn" onclick="location.reload()">Retake quiz</button> '+
      '<a class="btn ghost" href="quizzes.html" style="color:var(--navy);border-color:var(--navy)">Other quizzes</a></div>';
  }
  app.addEventListener('click',function(e){
    if(e.target&&e.target.id==='nextBtn') next();
  });
  render();
}
