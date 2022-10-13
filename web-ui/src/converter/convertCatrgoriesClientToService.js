const getCurrency = (currency) =>{
    let currencySign = '';
    switch (currency) {
        case "USD" :
            currencySign = '$';
            break;
        default:
    }
    return currencySign;
}

const getTotalAmount = (value,currency) => {
    if(!value){
        return "--";
    }
    if(value < 0)
        return `-${getCurrency(currency)}${Math.abs(value).toFixed(2)}`;
     else   
         return `${getCurrency(currency)}${Math.abs(value).toFixed(2)}`;

}

// export const getCategoryClientToService = (item) =>{
  
//        let table =  {
//         "title": item.category,
//         "total": getTotalAmount(item.totalAmount.value,item.totalAmount.currency),
//         "table_item": item?.subGroups?.map((subCategory) => {
//             return{
//                 "name":subCategory.category,
//                 "amount": getTotalAmount(item.totalAmount.value,item.totalAmount.currency),
//             }
//         })
//         }
//          return table;
        
    
// } 

export const getAccountSummary = (financialSummary) =>{
    let accountSummary=[];
    financialSummary.forEach(item => {  
        let category = {
            "title": item.category,
            "amount": getTotalAmount(item.totalAmount.value,item.totalAmount.currency)
        }
        accountSummary.push(category);
    });

    return accountSummary;
}

const getsubgroupUpdata = (subGroups,depth,group) => {
    if(!subGroups) return subGroups;
    const item = subGroups;
    for(let category =0 ;category < item.length ;category ++){
        let list = {
            "title": item[category].category,
            ...getAmounts(item[category]),
            "depth": depth
        }
        group.push(list);
        getsubgroupUpdata(item[category].subGroups,depth+1,group);
    }
    return group;
}

const getAmounts =(item) => {
    return {
        "totalAmount": getTotalAmount(item.totalAmount.value,item.totalAmount.currency),
        "creditAmount": getTotalAmount(item.creditAmount.value,item.creditAmount.currency),
        "debitAmount": getTotalAmount(item.debitAmount.value,item.debitAmount.currency),
    }
}
export const getTransactionsSummary = (financialSummary) =>{
    let transactionsSummary = [];
    financialSummary.forEach(item => {  
        let categoryDetail = {
            title: '',
            subTableContent: [],
        };
        categoryDetail.title = item.category;
        let category = [];
        let group=[];
        if(item.subGroups){
            category = getsubgroupUpdata(item.subGroups,0,group);
        }
        else {
            category = [{
                "title": item.category,
                ...getAmounts(item)
            }]  
        }
        let total = {
            "title": "SUB_TOTAL",
            ...getAmounts(item)
        }
        categoryDetail.subTableContent = category;
        categoryDetail.subTableContent.push(total)
        transactionsSummary.push(categoryDetail);
        
    });
    return transactionsSummary;
}