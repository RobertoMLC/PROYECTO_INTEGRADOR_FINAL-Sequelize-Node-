
async function isEmpty(table) {
    const resp = await table.findAndCountAll()
    if(resp.count != 0){
        return false
    }else{
        return true
    }
};


module.exports={isEmpty};
