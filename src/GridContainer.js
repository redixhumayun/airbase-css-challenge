import React from 'react'
import './GridContainer.css'

const GridContainer = ({ data }) => {
  return (
    <div className="grid">
      <div><p className="p-font-styling">Requested By</p></div>
      <div>
        <div style={{ width: '25px', height: '25px', marginRight: '15px' }}>
          <img src={data.requested_by.profile_picture} alt={''}/>
        </div>
        <p>{`${data.requested_by.first_name} ${data.requested_by.last_name}`}</p>
      </div>
      <div><p className="p-font-styling">Cost</p></div>
      <div><p>${data.cost}</p></div>
      <div><p className="p-font-styling">Renewal Frequency</p></div>
      <div className="inner-grid">
        <div><p>{data.renewal_frequency_in_months} month</p></div>
        <div className="div-row" style={{ height: '100%' }}>
          <p className="p-font-styling">Annual Cost</p>
          <p>${data.cost * 12}</p>
        </div>
      </div>
      <div><p className="p-font-styling">Expense Account</p></div>
      <div><p>{data.expense_account}</p></div>
      <div><p className="p-font-styling">File</p></div>
      <div><p style={{ wordBreak: 'break-all', whiteSpace: 'normal' }}>{data.files[0]}</p></div>
      <div><p className="p-font-styling">Description</p></div>
      <div><p>{data.service.description}</p></div>
    </div>
  )
}

export default GridContainer