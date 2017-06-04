// TODO Convert to JSON Format
var collisionMapArray = [
    platform1 = [
        //Section 1 
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 64,
            rightBound: 96,
            solid: true,
			floating: false
        }
        ,
        //Section 2
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 96,
            rightBound: 160,
            solid: true,
			floating: false
        }
        ,
        //Section 3
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 160,
            rightBound: 192,
            solid: true,
			floating: false
        }
        ,
        //Section 4
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 192,
            rightBound: 384,
            solid: true,
			floating: false
        }
    ]
    ,
    fplatform1 = [
        {
            topBound: 384,
            bottomBound: 416,
            leftBound: 256,
            rightBound: 224,
            solid: true,
            floating: true
        }
    ]
    ,
    box1 = [
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 544,
            rightBound: 576,
            solid: true,
            floating: false
        }
    ]
    ,
	stairs1 = [
		// Section 1
		{
			topBound: 480,
            bottomBound: 512,
            leftBound: 960,
            rightBound: 992,
            solid: true,
			floating: false
		}
		,
		// Section 2
		{
			topBound: 448,
			bottomBound: 512,
			leftBound: 992,
			rightBound: 1024,
			solid: true,
			floating: false
		}
        ,
		// Section 3
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 1024,
            rightBound: 1120,
            solid: true,
			floating: false
        }
        ,
        // Section 4
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 1120,
            rightBound: 1152,
            solid: true,
			floating: false
        }
        ,
        // Section 5
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 1152,
            rightBound: 1184,
            solid: true,
			floating: false
        }
	]
	,
	fplatform2 = [
        {
            topBound: 352,
            bottomBound: 384,
            leftBound: 1248,
            rightBound: 1376,
            solid: true,
			floating: true
        }
	]
	,
    fplatform3 = [
        {
            topBound: 288,
            bottomBound: 320,
            leftBound: 1472,
            rightBound: 1600,
            solid: true,
			floating: true
        }
    ]
    ,
    stairs2 = [
        // Section 1
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 1824,
            rightBound: 1856,
            solid: true,
			floating: false
        }
        ,
        // Section 2
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 1856,
            rightBound: 1888,
            solid: true,
			floating: false
        }
        ,
        // Section 3
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 1888,
            rightBound: 1920,
            solid: true,
			floating: false
        }
        ,
        // Section 4 
        {
            topBound: 384,
            bottomBound: 512,
            leftBound: 1920,
            rightBound: 1952,
            solid: true,
			floating: false
        }
    ]
    ,
    spike1 = [
        {
            topBound: 512,
            bottomBound: 544,
            leftBound: 1952,
            rightBound: 1984,
            solid: true,
			floating: false
        }
    ]
    ,
    stairs3 = [
        // Section 1
        {
            topBound: 384,
            bottomBound: 512,
            leftBound: 1984,
            rightBound: 2016,
            solid: true,
			floating: false
        }
        ,
        // Section 2
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 2016,
            rightBound: 2048,
            solid: true,
			floating: false
        }
        ,
        // Section 3
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 2048,
            rightBound: 2080,
            solid: true,
			floating: false
        }
        ,
        // Section 4
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 2080,
            rightBound: 2112,
            solid: true,
			floating: false
        }
    ]
    ,
    stairs4 = [
        // Section 1
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 2336,
            rightBound: 2368,
            solid: true,
			floating: false
        }
        ,
        // Section 2 
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 2368,
            rightBound: 2400,
            solid: true,
			floating: false
        }
        ,
        // Section 3 
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 2400,
            rightBound: 2432,
            solid: true,
			floating: false
        }
        ,
        // Section 4
        {
            topBound: 384,
            bottomBound: 512,
            leftBound: 2432,
            rightBound: 2464,
            solid: true,
			floating: false
        }
        ,
        // Section 5
        {
            topBound: 352,
            bottomBound: 512,
            leftBound: 2464,
            rightBound: 2528,
            solid: true,
			floating: false
        }
    ]
    ,
    spike2 = [
        {
            topBound: 512,
            bottomBound: 544,
            leftBound: 2528,
            rightBound: 2624,
            solid: true,
			floating: false
        }
    ]
    ,
    stairs5 = [
        // Section 1
        {
            topBound: 352,
            bottomBound: 512,
            leftBound: 2624,
            rightBound: 2688,
            solid: true,
			floating: false
        }
        ,
        // Section 2
        {
            topBound: 384,
            bottomBound: 512,
            leftBound: 2688,
            rightBound: 2720,
            solid: true,
			floating: false
        }
        ,
        // Section 3
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 2720,
            rightBound: 2752,
            solid: true,
			floating: false
        }
        ,
        // Section 4
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 2752,
            rightBound: 2784,
            solid: true,
			floating: false
        }
        ,
        // Section 5
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 2784,
            rightBound: 2816,
            solid: true,
			floating: false
        }
    ]
    ,
    fplatform4 = [
        {
            topBound: 384,
            bottomBound: 416,
            leftBound: 2880,
            rightBound: 3040,
            solid: true,
			floating: true
        }
    ]
    ,
    fplatform5 = [
        {
            topBound: 416,
            bottomBound: 448,
            leftBound: 3424,
            rightBound: 3488,
            solid: true,
			floating: true
        }
    ]
    ,
    spike3 = [
        {
            topBound: 512,
            bottomBound: 544,
            leftBound: 3392,
            rightBound: 3520,
            solid: true,
			floating: false
        }
    ]
    ,
    fplatform6 = [
        {
            topBound: 416,
            bottomBound: 448,
            leftBound: 3744,
            rightBound: 3808,
            solid: true,
			floating: true
        }
    ]
    ,
    stairs6 = [
        // Section 1
        {
            topBound: 480,
            bottomBound: 512,
            leftBound: 4096,
            rightBound: 4160,
            solid: true,
			floating: false
        }
        ,
        // Section 2
        {
            topBound: 448,
            bottomBound: 512,
            leftBound: 4160,
            rightBound: 4192,
            solid: true,
			floating: false
        }
        ,
        // Section 3 
        {
            topBound: 416,
            bottomBound: 512,
            leftBound: 4192,
            rightBound: 4224,
            solid: true,
			floating: false
        }
    ]
    ,
    platform2 = [
        
    ]
    
]

	
