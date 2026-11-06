// All 15 short quotes are original writing for this class project.
const quotes = [
  {text:'Small steps make big ideas possible.', author:'My Site'},
  {text:'Stay curious, even when answers are slow.', author:'My Site'},
  {text:'Good questions open new doors.', author:'My Site'},
  {text:'Make something simple, then make it better.', author:'My Site'},
  {text:'A fresh start is a form of progress.', author:'My Site'},
  {text:'Creativity begins with noticing.', author:'My Site'},
  {text:'Learning grows through practice.', author:'My Site'},
  {text:'Every project teaches a different lesson.', author:'My Site'},
  {text:'Try, reflect, improve, repeat.', author:'My Site'},
  {text:'Great work begins with an imperfect draft.', author:'My Site'},
  {text:'Build with care, not just speed.', author:'My Site'},
  {text:'Be patient with the learning process.', author:'My Site'},
  {text:'A good idea deserves a first attempt.', author:'My Site'},
  {text:'Keep the useful things simple.', author:'My Site'},
  {text:'Today is another chance to create.', author:'My Site'}
];
const list = document.getElementById('quote-list');
const featured = document.getElementById('featured-quote');
const byline = document.getElementById('featured-author');
const button = document.getElementById('random-quote');
if (list && featured && byline && button) {
  quotes.forEach(({text,author},index)=>{
    const item = document.createElement('article');
    item.className = 'quote-card';
    const q = document.createElement('blockquote');
    q.textContent = `“${text}”`;
    const c = document.createElement('cite');
    c.textContent = `${String(index+1).padStart(2,'0')} · ${author}`;
    item.append(q,c);
    list.appendChild(item);
  });
  let last = -1;
  function showRandom(){
    let index;
    do { index = Math.floor(Math.random()*quotes.length); } while (index===last && quotes.length>1);
    last = index;
    featured.textContent = `“${quotes[index].text}”`;
    byline.textContent = `— ${quotes[index].author}`;
  }
  button.addEventListener('click',showRandom);
  showRandom();
}
