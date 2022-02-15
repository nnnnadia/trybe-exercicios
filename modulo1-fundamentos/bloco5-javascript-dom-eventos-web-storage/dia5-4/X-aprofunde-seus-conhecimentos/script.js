let paragraphs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum augue id egestas lacinia. Ut felis sapien, sodales sit amet augue nec, ultricies placerat nisl. Aenean vel velit iaculis, elementum justo sit amet, posuere nulla. Nullam ullamcorper tempus pulvinar. Praesent vel facilisis tortor. Integer cursus accumsan convallis. Curabitur erat sapien, condimentum sed neque eget, malesuada posuere diam. Sed malesuada fermentum mattis. Aliquam tincidunt sem sit amet arcu mattis varius. In semper nec velit a elementum. Proin vitae vehicula arcu, eu hendrerit arcu. Aliquam ullamcorper egestas tellus, ac aliquet diam auctor at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis gravida mattis justo mollis fringilla. Cras nec magna arcu. Nulla magna nisl, blandit sit amet augue ut, pulvinar mattis justo.',
'Vivamus nec neque non lorem vehicula gravida ac id lacus. Praesent id dolor id metus suscipit varius. Nam in viverra justo. Sed erat nunc, malesuada sit amet massa quis, mollis congue lectus. Donec pretium, arcu vitae semper viverra, sem tellus blandit dolor, in mattis nulla magna et tellus. Cras facilisis mauris mauris. Mauris at ex condimentum, luctus orci dapibus, luctus ipsum. Phasellus ultricies, eros ut interdum vulputate, turpis ante gravida dolor, quis pulvinar mi enim vitae felis. Curabitur finibus, lorem blandit lobortis molestie, neque orci posuere sem, faucibus pellentesque eros felis eu neque. In lacinia porttitor congue. Aliquam ultricies, massa ut ullamcorper rutrum, est mauris faucibus metus, convallis volutpat mauris ex eget sapien. Vivamus bibendum nibh quis libero maximus, at posuere leo convallis. Pellentesque efficitur cursus purus, vel efficitur ante scelerisque ut.', 
'Vestibulum pretium porta magna non consectetur. Sed vitae nibh porttitor, consequat nisi sed, eleifend metus. Suspendisse feugiat lectus urna, ut tincidunt leo egestas eu. Aenean tincidunt nisi non arcu aliquet dictum. In ac mollis libero. Etiam congue ante ut neque pharetra, at blandit nisi tincidunt. Integer vulputate libero sed sodales finibus. In vitae risus venenatis arcu pulvinar molestie nec id sem. Nulla condimentum ut urna vel ornare. Duis magna libero, mattis et velit eu, lobortis suscipit elit.', 
'Suspendisse id ipsum eleifend, vehicula enim vitae, blandit lorem. Donec tortor sem, varius non tellus sed, hendrerit tempus lacus. Praesent id mauris interdum, vulputate urna vel, vestibulum justo. Maecenas ut venenatis risus, at condimentum felis. Curabitur egestas purus porttitor ipsum pharetra, sed feugiat neque eleifend. Phasellus nec ligula ante. Etiam faucibus euismod dui, eu efficitur neque auctor et. Vivamus quam lacus, aliquet vitae luctus eget, condimentum ut mi.', 
'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur magna eros, semper et massa vel, scelerisque ornare nulla. Curabitur in viverra diam. Pellentesque fermentum ipsum augue, at pharetra arcu tincidunt nec. Praesent vel augue tellus. Nam enim dui, molestie sed ipsum et, hendrerit tincidunt arcu. Quisque dictum odio ut aliquet viverra. Etiam tempor ultrices metus, ut pretium orci vulputate non. Maecenas sit amet auctor mi. Curabitur vel urna ultricies, bibendum velit in, hendrerit dui. Ut eu est congue, faucibus est vel, venenatis lacus. Aenean porta ex odio, convallis dapibus orci tempus nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam porttitor suscipit turpis ac ullamcorper.'];
let textArea = document.querySelector('#text-area');
let preferencesList = {
  'background-color': 'lightblue',
  'color': '#777',
  'font-size': '16px',
  'line-height': '22px',
  'font-family': 'monospace',
};

localStorage.setItem('preferences', JSON.stringify(preferencesList));

function loadText(paragraphs) {
  for (let paragraph of paragraphs) {
    let newP = document.createElement('p');
    newP.innerText = paragraph;
    textArea.appendChild(newP);
  }
}
function loadPreferences() {
  let preferences = JSON.parse(localStorage.getItem('preferences'));
  let head = document.querySelector('head');
  let newStyle = document.createElement('style');
  newStyle.innerText = `#text-area {`;
  for (let key in preferences) {
    newStyle.innerText += `${key}: ${preferences[key]};`;
  }
  newStyle.innerText += `}`;
  head.appendChild(newStyle);
}

window.onload = function() {
  loadText(paragraphs);
  loadPreferences();
}