
//custom cursors Mod<let> v0.3

alert('Custom Cursors Activated. Press M for the menu')


var Cursors = [null,null,null,null,null]
var LoadingCursor = null
var NoCursor = 'https://p.kindpng.com/picc/s/110-1103757_computer-mouse-cursor-computer-mouse-on-the-screen.png'
var Cursor2save = null



function Window() {
    OpenWindow('More cursors','copy the link adresses','cursor1','cursor2','cursor3','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8bf35fee-a6d2-4134-b69b-5402b3d4ecba/db1iy12-1571ff87-55fa-49d3-8765-b3f9a5cc5ada.png','','','#099f')


    
    
}


function OpenWindow(title,text,link1,link2,link3,link1url,link2url,link3url,Bgcolor) {
    (function(window) {
  var links = [{
    name: link1,
    url: link1url
  }, {
    name: link2,
    url: link2url
  }, {
    name: link3,
    url: link3url
  }];
  var props = {
    width: 500,
    height: 300,
    background: Bgcolor,
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#444',
    headerTitleColor: '#FFF',
    windowTitle: title
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'Copy the links and install them';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = '×';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);
}
    

   
   
   
   
   
   
   
   
   function SaveCursor() {
      var ans = null
      ans=prompt('load thing')
      Cursor2save = ans
      
      
      
      
      
      if (Cursors[1] === null) {
        Cursors[1] = Cursor2save  
      }else {
          if (Cursors[2] === null) {
            Cursors[2] = Cursor2save  
          }else {
              alert('no space')
          }
      }
       
       
       
       
       
   }
   
   
   function LoadCursor() {
    var ans = null
    ans=prompt('load cursor #')
    if (Cursors[ans] !== null) {
      
javascript:(function(){var ans = null
ans=prompt('cursor')

    var cursor = document.createElement('img'); cursor.style.zIndex = 999; cursor.src = Cursors[ans]; cursor.style.position = 'fixed'; cursor.select = 'none'; cursor.id = 'cursor'; cursor.width = 25; cursor.height = 35; cursor.style.marginLeft = '-100px'; cursor.style.top = '0px'; cursor.style.pointerEvents = "none"; document.body.appendChild(cursor); var elems = document.body.getElementsByTagName("*"); for (var i =0;i<elems.length;i++){ elems[i].style.cursor = 'none'; } var urls = [Cursors[ans]]; var current = 0; document.onmousemove = function(){ document.getElementById('cursor').style.marginLeft = event.clientX-1 + 'px'; document.getElementById('cursor').style.marginTop = event.clientY-15 + 'px'; }; function change(){ current++; if (current>urls.length){ current = 0; } document.getElementById('cursor').src = urls[current]; } setInterval(change,0);})();
    

        
    }else {
        javascript:(function(){

    var cursor = document.createElement('img'); cursor.style.zIndex = 999; cursor.src = NoCursor; cursor.style.position = 'fixed'; cursor.select = 'none'; cursor.id = 'cursor'; cursor.width = 25; cursor.height = 35; cursor.style.marginLeft = '-100px'; cursor.style.top = '0px'; cursor.style.pointerEvents = "none"; document.body.appendChild(cursor); var elems = document.body.getElementsByTagName("*"); for (var i =0;i<elems.length;i++){ elems[i].style.cursor = 'none'; } var urls = [NoCursor]; var current = 0; document.onmousemove = function(){ document.getElementById('cursor').style.marginLeft = event.clientX-1 + 'px'; document.getElementById('cursor').style.marginTop = event.clientY-15 + 'px'; }; function change(){ current++; if (current>urls.length){ current = 0; } document.getElementById('cursor').src = urls[current]; } setInterval(change,0);})();
    }
   }
   
   
   function MyCursors() {
           OpenWindow('My cursors','',Cursors[1],Cursors[2],'','','','','#099f')

   }
   
   
   
   document.addEventListener("keyup", function(event) {
    if (event.key === 'P') {
        SaveCursor()
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === 'O') {
        LoadCursor()
    }
});
   
   document.addEventListener("keyup", function(event) {
    if (event.key === 'I') {
        MyCursors()
    }
});
   
   
   document.addEventListener("keyup", function(event) {
    if (event.key === 'U') {
    Window()
    }
});
   
   document.addEventListener("keyup", function(event) {
    if (event.key === 'm') {
    alert('MAKE SURE TO PRESS SHIFT WITH THESE KEYS. press P to save a cursor. press O to load a cursor. press I to view your cursors. press U to open more cursors')
    }
});
   
   
   
   
   
   
   
   
   
    
    
    
