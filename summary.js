const checkAddOns = function(){
  let showcase = [];
  $.each(sessionStorage, function(key, value){
        if (key.indexOf('agent')>=0 && value ==='true'){
          var clean = key.substring(0, 1).toUpperCase()+ key.substring(1, 5) + " " + key.substring(5, 6) + " "+ key.substring(6)
          showcase.push(clean)
        }
      });
      return showcase
  }

  const checkItems = function(){
    let showcase = [];
    $.each(sessionStorage, function(key, value){
          if (key.indexOf('catalog')>=0 && value ==='true'){
            var clean = key.substring(0, 1).toUpperCase()+ key.substring(1, key.length-1) + " " + key.substring(key.length-1)
            showcase.push(clean)
          }
        });
        return showcase
    }

const addOnsHTML = function(array){
  let output = ''
  for (var i = 0; i < array.length; i++) {
    output += '<span class="card-title right">' + array[i] +'</span><br/>'
  }
    return output
  };

const itemsHTML = function(array) {
  let output = ''
  for (var i = 0; i < array.length; i++) {
    output += '<span class="card-title right">' + array[i] +'</span><br/>'
  }
    return output
  };


// Session Check Logic
  if (sessionStorage.length !== 0) {
    $('#no-plan').addClass('hidden');
    let addOns = checkAddOns();
    let addOnsOutput = addOnsHTML(addOns)
    let items = checkItems();
    let itemsOutput = itemsHTML(items);

    let allContent = `
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">ProviderName: </span>
            <span class="card-title right">${sessionStorage.planName}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Compute Backing: </span>
            <span class="card-title right">${sessionStorage.computeBacking}</span>
            <br>
            <span class="card-title">Cloud Equivalent: </span>
            <span class="card-title right">${sessionStorage.cloudEquiv}</span>
            <br>
            <span class="card-title">Size: </span>
            <span class="card-title right">${sessionStorage.cloudEquivSize}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Governance: </span>
            <span class="card-title right">${sessionStorage.governance}</span>
            <br/>
            <span class="card-title">Add Ons: </span>
            ${addOnsOutput}<br/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Associate Organizations: </span>
            <span class="card-title right">${sessionStorage.assocOrg}</span>
            <br/>
            <span class="card-title">Description: </span>
            <span class="card-title right">${sessionStorage.assocOrgDesc}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Partner: </span>
            <span class="card-title right">${sessionStorage.partnerCompute}</span>
            <br/>
            <span class="card-title">AddOn: </span>
            <span class="card-title right">${sessionStorage.partnerAddOn}</span>
            <br/>
            <span class="card-title">Fee: </span>
            <span class="card-title right">${sessionStorage.partnerAddOnFee}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content">
            <span class="card-title">Marketplace Items: </span>
              ${itemsOutput}
              <br/>
          </div>
        </div>
      </div>
    </div>`


    $('#main').append(allContent);
  }




/*

<div class="row">
  <div class="col s12">
    Provider Backing
  </div>
</div>
<div class="row">
  <div class="col s12">
    Governance
  </div>
</div>
<div class="row">
  <div class="col s12">
    Associate Organizations
  </div>
</div>
<div class="row">
  <div class="col s12">
    Partner
  </div>
</div>
<div class="row">
  <div class="col s12">
    Marketplace
  </div>
</div> */
