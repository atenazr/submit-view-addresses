export default {
  async registerAddress(context, data) {
    const addressData = {
      first_name: data.firstName,
      last_name : data.lastName,
      gender: data.gender,
      region: data.region,
      lat: data.lat,
      lng:data.lng,
      address:data.address,
      coordinate_mobile:data.coordinateMobile,
      coordinate_phone_number:data.coordinatePhoneNumber
    };

    const response = await fetch(
      `https://submit-view-addresses-default-rtdb.firebaseio.com/addresses.json`,
      {
        method: 'POST',
        body: JSON.stringify(addressData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }
    console.log('respo',response);

    await context.commit('registerAddress', {
      addressData
    });
  },
  async loadAddresses(context) {

    const response = await fetch(
      "https://submit-view-addresses-default-rtdb.firebaseio.com/addresses.json",{
        method:'GET'
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const addresses = [];

    // console.log('addresses',responseData);

    for (const key in responseData) {
      const address = {
        id: key,
        firstName: responseData[key].first_name,
        lastName: responseData[key].last_name,
        address: responseData[key].address,
        coordinateMobile: responseData[key].coordinate_mobile
      };
      addresses.push(address);
    }
    // console.log('addresses',this.$store.getters['addresses']);
    context.commit('setAddresses', addresses);
  }
};
