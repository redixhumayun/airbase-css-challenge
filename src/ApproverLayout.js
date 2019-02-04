import React from 'react'
import './ApproverLayout.css'

const ApproverLayout = ({ data }) => {
  const dataSortedByApprovers = seperateApprovers(data)
  console.log(dataSortedByApprovers)
  return dataSortedByApprovers.map((data, index) => {
    const date = new Date(data.last_updated_date).toDateString().split(' ').slice(1).join(' ')
    return (
      <div className="approver-container" key={date + index}>
        <p className="status-header">{data.status}</p>
        <div className="approver-item">
          <div className="number-display">
            <p>{index + 1}</p>
          </div>
          <div className="image-container">
            <img src={data.approver.profile_picture} alt={''} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p className="approver-name">{data.approver.first_name} {data.approver.last_name}</p>
              <p className="approver-details">({data.approver.email})</p>
            </div>
            <p className="approver-details">Approved {date}</p>
          </div>
          {
            data.status === 'Approved' && (
              <div className="tick-icon"><img src={process.env.PUBLIC_URL + '/assets/tickicon.svg'} /></div>
            )
          }
          {
            data.status === 'Pending' && (
              <div className="tick-icon"><img src={process.env.PUBLIC_URL + '/assets/notickicon.svg'} /></div>
            )
          }
        </div>
      </div>
    )
  })
}

/**
 * Sorts the array of approvers based on status and 
 * associates them with the correct date in the required format
 * @param {Object} data 
 * @return {Array}
 */
const seperateApprovers = (data) => {
  return data.approvers.sort(function (a, b) {
    if (a.status < b.status) return -1;
    if (a.status > b.status) return 1;
    return 0;
  }).map(approver => {
    switch (approver.status) {
      case 'accepted':
        approver.status = 'Approved'
        approver.dateToDisplay = new Date(data.last_updated_date).toDateString().split(' ').slice(1).join(' ')
        break;
      case 'created':
        approver.status = 'Created'
        approver.dateToDisplay = new Date(data.created_date).toDateString().split(' ').slice(1).join(' ')
        break
      case 'pending':
        approver.status = 'Pending'
        approver.dateToDisplay = new Date(data.last_notified_time).toDateString().split(' ').slice(1).join(' ')
        break
      default:
        return null
    }
    return approver
  })
}

export default ApproverLayout