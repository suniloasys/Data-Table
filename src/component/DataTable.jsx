import React from 'react'

const DataTable = ({data}) => {
  return (
    <>
      <table className="table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
       
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((val, i) => (
              <td key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>

    </>
  )
}

export default DataTable
