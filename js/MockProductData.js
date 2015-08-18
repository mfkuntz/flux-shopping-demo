module.exports = {
	init: function(){
		localStorage.clear();

		localStorage.setItem('product', JSON.stringify([
		{	
			id: '0011001',
			name: 'Scotch.IO Scotch',
			image: 'scotchio.png',
			description: 'The finest scotch money can buy. Hints of keyboard and coffee',
			variants: [
				{
					sku: '123123',
					type: '40oz Bottle',
					price: 4.99,
					inventory: 1
				},
				{
					sku: '123124',
					type: '6 Pack',
					price: 12.99,
					inventory: 5
				},
				{
					sku: '1231235',
					type: '30 Pack',
					price: 19.99,
					inventory: 3
				}
			]
		}
		]));

	}
}
