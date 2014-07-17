function getDocName() {
	if (!document.location.hash) {
		document.location.hash = '#' + Date.now();
	}
	var docname = /*'hex:' +*/ document.location.hash.slice(1);
	return docname;
}

function getStartJSON() {
	return {
	  name: "",
	  scenes:[{
	    name: "Cena 1",
	    itens: [{
	      name: "Item 1",
	      id: 0,
	      x: 22,
	      y: 32,
	      width: 400,
	      height: 500
	    },
	    {
	      name: "Item 2",
	      id: 1,
	      x: 250,
	      y: 300,
	      width: 450,
	      height: 550
	    }]
	  },
	  {
	    name: "Cena 2",
	    itens: [{
	      name: "Item 1",
	      id: 0,
	      x: 22,
	      y: 32,
	      width: 400,
	      height: 500
	    },
	    {
	      name: "Item 2",
	      id: 1,
	      x: 250,
	      y: 300,
	      width: 450,
	      height: 550
	    }]
	  }]
	};
}

function addScene(obj) {
	var cnt = obj.scenes.length;
	obj.scenes.push({
	    name: "Cena " + cnt,
	    itens: [{
	      name: "Item 1",
	      id: 0,
	      x: 22,
	      y: 32,
	      width: 400,
	      height: 500
	    },
	    {
	      name: "Item 2",
	      id: 1,
	      x: 250,
	      y: 300,
	      width: 450,
	      height: 550
	    }]
	});
}

function adiciona() {
	var obj = $state.get();
	addScene(obj);
	$state.set(obj);
}

function muda(cena) {
	console.log("Cena", cena);
	// scenes[cena].itens[0].width
	$state.at(['scenes', cena, 'itens', 0, 'width']).set(100);
	// scenes[cena].itens[1].height
	$state.at(['scenes', cena, 'itens', 1, 'height']).set(100);
}