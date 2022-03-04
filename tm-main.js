let _1third = 79;
let _2thirds = 159;
let _3thirds = 239;
let _1quarter = 59;
let _3quarters = 179;
let _1half = 119;

let rect = (p1,p2,c) => {
	g.setColor(c[0],c[1],c[2]);
	g.fillRect(p1[0],p1[1],p2[0],p2[1]);
};

let circle = (p,size,c) => {
	g.setColor(c[0],c[1],c[2]);
	g.fillCircle(p[0],p[1],size);
};

let redraw = () => {
	g.clear();
//leftUp
circle([_1quarter,_1quarter],30,[1,1,1]);
//rightUp
circle([_3quarters,_1quarter],30,[1,1,1]);
//midDown
circle([_1half,_3quarters],30,[1,1,1]);
};


Bangle.on('touch',(button)=>{
	console.log(`you pressed ${button}`);
	if ( button === 3 ) {
		g.setBgColor(1,1,0);
	} else if ( button === 2 ) {
		g.setBgColor(0,1,0);
	} else if ( button === 1 ) {
		g.setBgColor(0,1,1);
	}
	Bangle.buzz().then(()=>{
		redraw();
	});
//redraw();
});

