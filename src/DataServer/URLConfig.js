const host='http://localhost;'
const port =2538

const loginURL = host+port+'/api/User/Login';
const registerURL = host+port+'api/User/regist';
const UpdateCustomer = host+port+'api/User/UpdateCustomer';
const setReceivingAddress = host+port+'api/receivingAddress/Post';
const updateReceivingAddress = host+port+'api/receivingAddress/Put';
const delReceivingAddress = host+port+'api/receivingAddress/Delete';
const getReceivingAddress = host+port+'api/receivingAddress/Get';
const postOrder = host+port+'api/Order/PostOrder';
const searchOrder = host+port+'api/Order/GetOrderSearch';
const updateState = host+port+'api/Order/UpdateState';
const comment = host+port+'api/Comment/Post';
const searchGoodsType = host+port+'api/GoodsType/SearchGoodsType';
const postSearchPro = host+port+'api/Product/PostSearchPro';
const postSearchCom = host+port+'api/Product/PostSearchCom';

export {
    loginURL,
    registerURL,
    UpdateCustomer,
    setReceivingAddress,
    updateReceivingAddress,
    delReceivingAddress,
    getReceivingAddress,
    postOrder,
    searchOrder,
    updateState,
    comment,
    searchGoodsType,
    postSearchPro,
    postSearchCom


   
}
