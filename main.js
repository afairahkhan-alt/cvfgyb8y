document.documentElement.classList.add('js');
function go(id){var e=document.getElementById(id);if(e)e.scrollIntoView({behavior:'smooth',block:'start'});}
document.querySelectorAll('[data-go]').forEach(function(a){a.addEventListener('click',function(ev){ev.preventDefault();go(a.dataset.go);document.getElementById('menu').classList.remove('open');})});
document.getElementById('bg').onclick=function(){document.getElementById('menu').classList.toggle('open')};
var links=[].slice.call(document.querySelectorAll('nav a.l'));
function spy(){var y=window.scrollY+120,cur=null;['portfolio','gallery','featured','contact'].forEach(function(id){var e=document.getElementById(id);if(e&&e.offsetTop<=y)cur=id});links.forEach(function(l){l.classList.toggle('on',l.dataset.go===cur)})}
window.addEventListener('scroll',spy,{passive:true});spy();
document.getElementById('fl').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;this.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
 document.querySelectorAll('.tile').forEach(function(t){t.classList.toggle('hide',b.dataset.f!=='all'&&t.dataset.cat!==b.dataset.f)})});
var lb=document.getElementById('lb');
function openLb(t){document.getElementById('lc').innerHTML=t.querySelector('.art').innerHTML;document.getElementById('lcap').textContent=t.querySelector('b').textContent+' — '+t.querySelector('span').textContent;lb.classList.add('open')}
document.querySelectorAll('.tile').forEach(function(t){t.addEventListener('click',function(){openLb(t)});t.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openLb(t)}})});
function closeLb(){lb.classList.remove('open')}
document.getElementById('lx').onclick=closeLb;lb.addEventListener('click',function(e){if(e.target===lb)closeLb()});document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLb()});
try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});document.querySelectorAll('.reveal').forEach(function(r){io.observe(r)})}catch(e){document.querySelectorAll('.reveal').forEach(function(r){r.classList.add('in')})}
document.getElementById('yr').textContent=new Date().getFullYear();
document.getElementById('cf').addEventListener('submit',function(e){e.preventDefault();var f=e.target,n=document.getElementById('note');
 if(!f.n.value.trim()||!/\S+@\S+\.\S+/.test(f.e.value)||!f.m.value.trim()){n.textContent='Please add your name, a valid email and a message.';return}
 n.textContent='Thank you, '+f.n.value.trim()+'. This sample form does not send messages yet — connect it to your email service, or write to hello@yourfirm.example.';});
