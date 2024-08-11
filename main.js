
function profileMagazine(label, schedule, products, description, team) {
    
    const makeBlackFriday = function(disc)  {
        if (disc<0 || disc >1) {
            return null 
        }
        for(let i of this.products) {
            i.price = i.price * disc
        }
    }

    const verifySore = function(store) {
        for (let i of store) {
           this.products.forEach(prod => {
            if (prod.productName==i.productName) {
                prod.count = i.count
            }
           });
        }
    }

    const ellipsisText = function(text, maxLenght) {
        if (text.length > maxLenght) {
            return text.slice(0, maxLenght-1) + '...'
        }
        return text 
    }

    const censorshipCheck = function (advertisement, forbiddenWord) {
        if ( advertisement.includes(forbiddenWord)) {
            return advertisement.replace(" "+  forbiddenWord, "")
        }

    }

    const checkDaytoSale= function(startSaleDate) {
        
        return Math.floor((startSaleDate- Date.now())/86400000)

    }

    const prepareInventory = function() {
        let canPrepareCount = 10*team*checkDaytoSale(new Date(2024, 10,29))
        
        let needPrepareCoun = 0
        products.forEach( prod =>{
            needPrepareCoun =needPrepareCoun + prod.count
        })
        if (canPrepareCount > needPrepareCoun) {
            return true 
        }
        return false
    }

    return{
        label,
        schedule,
        products,
        description,

        makeBlackFriday,
        verifySore,
        ellipsisText,
        censorshipCheck,
        checkDaytoSale,
        prepareInventory
    }
}

function productStatts(productName, count, price=null) {
    return {
        productName,
        count, 
        price
    }
}

let shop = profileMagazine('ZARA',
     "Sun:12:00pm, fri: 09:00am", 
     [productStatts("sneekers", 12, 50),productStatts("shirt", 10, 20) , productStatts("t-shirt", 100, 5) ],
     "Nices shop, just duck nice shop",
     2
    )


