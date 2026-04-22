import Script from 'next/script'

/**
 * One vanilla-JS IntersectionObserver that animates every .reveal element on
 * the page. Runs after interactive so it doesn't compete for main thread
 * during hydration. Replaces N hydrated React Reveal components with zero.
 */
export default function RevealRunner() {
  const code = `(function(){
    var els=document.querySelectorAll('.reveal');
    if(!els.length)return;
    if(typeof IntersectionObserver==='undefined'){els.forEach(function(e){e.classList.add('in')});return}
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
    },{threshold:0.12});
    els.forEach(function(e){
      var r=e.getBoundingClientRect();
      if(r.top<innerHeight&&r.bottom>0){e.classList.add('in')}else{io.observe(e)}
    });
  })();`
  return (
    <Script
      id="reveal-runner"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}
