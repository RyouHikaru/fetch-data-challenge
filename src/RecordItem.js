const RecordItem = ({ column, data }) => {

  const formattedData = () => {
    if (column === 'address')
      return formatAddress(data[column]);
    else if (column === 'company')
      return formatCompany(data[column]);
    else
      return data[column];
  }

  const formatAddress = (address) => {
    const addressArray = [
      address.street, address.suite, 
      address.city, address.zipcode, address.geo.lat,
      address.geo.lng
    ];

    const fullAddress = addressArray.join(', ');

    return fullAddress;
  }

  const formatCompany = (company) => {
    const companyDetails = (
      <p>
        Name: {company.name}<br />
        Catch phrase: {company.catchPhrase}<br />
        Business nature: {company.bs}
      </p>
    )

    return companyDetails;
  }

  return (
    <td>{ formattedData() }</td>
  )
}

export default RecordItem;