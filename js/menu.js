// $(document).ready(function(){
// //start    
//     $('#header-inner').load('/Biz/menu.html header');
//     $('#main-customer').load('/Biz/menu.html .main_customer');
//     $('#footer-inner').load('/Biz/menu.html footer');
    
//     console.log('메뉴 테스트');
// //end    
// });


const BASE_PATH = location.hostname.includes('github.io') ? '/biz' : '';

$(function(){
    $('#header-inner').load(BASE_PATH + '/menu.html header');
    $('#main-customer').load(BASE_PATH + '/menu.html .main_customer');
    $('#footer-inner').load(BASE_PATH + '/menu.html footer');
});