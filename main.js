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

// Goverance Logic

$('#governance').on('change', () => {
  $('.agent-a').addClass('hidden');
  $('.agent-b').addClass('hidden')
  let agent = $('#governance').val();
  if (agent === '25-instances'){
    $('.agent-a').removeClass('hidden');
    $('#agent-b-item1').prop('checked', false)
    $('#agent-b-item2').prop('checked', false)
    $('#agent-b-item3').prop('checked', false)
  }
  if (agent === '50-instances'){
    $('.agent-b').removeClass('hidden');
    $('#agent-a-item1').prop('checked', false)
    $('#agent-a-item2').prop('checked', false)
    $('#agent-a-item3').prop('checked', false)
  }
});


// Local Storage Form
$('#submit').on('click', ()=>{
    let planObject = {};
    planObject.planName = $('#plan-name').val();
    planObject.computeBacking = $('#compute-backing').val();
    planObject.cloudEquiv = $('#cloud-equiv').val();
    planObject.cloudEquivSize = $('#cloud-equiv-size').val();
    planObject.governance = $('#governance').val();
    planObject.governance = $('#governance').val();
    planObject.agentAItem1 = $('#agent-a-item1')[0].checked.toString();
    planObject.agentAItem2 = $('#agent-a-item2')[0].checked.toString();
    planObject.agentAItem3 = $('#agent-a-item3')[0].checked.toString();
    planObject.agentBItem1 = $('#agent-b-item1')[0].checked.toString();
    planObject.agentBItem2 = $('#agent-b-item2')[0].checked.toString();
    planObject.agentBItem3 = $('#agent-b-item3')[0].checked.toString();
    planObject.assocOrg = $('#assoc-org').val();
    planObject.assocOrgDesc = $('#assoc-org-desc').val()
    planObject.partnerCompute = $('#partner-compute').val();
    planObject.partnerAddOn = $('#partner-add-on').val();
    planObject.partnerAddOnFee = $('#partner-add-on-fee').val();
    planObject.catalog1 = $('#catalog1')[0].checked.toString();
    planObject.catalog2 = $('#catalog2')[0].checked.toString();
    planObject.catalog3 = $('#catalog3')[0].checked.toString();

    console.log(planObject);

// Sets Session Storage to contain builet object
    for (let char in planObject) {
      sessionStorage.setItem(char, planObject[char])
    }

  });
});
