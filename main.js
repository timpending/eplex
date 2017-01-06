// Initialize collapse button
$(document).ready(function() {
  $('.button-collapse').sideNav({
    menuWidth: 350
  });
  $('select').material_select();
  $('#cloud-equiv').material_select();

// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
  $('.menu-header').on('click', ()=>{
    $('.button-collapse').sideNav('hide')
  });

// Local Storage Form
$('#submit').on('click', ()=>{
    let planObject = {};
    planObject.planName = $('#plan-name').val();
    planObject.computeBacking = $('#compute-backing').val();
    planObject.cloudEquiv = $('#cloud-equiv').val();
    planObject.cloudEquivSize = $('#cloud-equiv-size').val();
    planObject.assocOrg = $('#assoc-org').val();
    planObject.assocOrgDesc = $('#assoc-org-desc').val()
    planObject.partnerCompute = $('#partner-compute').val();
    planObject.partnerAddOn = $('#partner-add-on').val();
    planObject.partnerAddOnFee = $('#partner-add-on-fee').val();
    planObject.catalog1 = $('#catalog1')[0].checked;
    planObject.catalog2 = $('#catalog2')[0].checked;
    planObject.catalog3 = $('#catalog3')[0].checked;


    console.log(planObject);

// Sets Session Storage to contain builet object
    for (let char in planObject) {
      sessionStorage.setItem(char, planObject[char])
    }

  });
});
