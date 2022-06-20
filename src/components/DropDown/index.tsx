import React, { useState } from 'react'
import { useWallet } from 'use-wallet'

import * as networkList from '../../constants/networks.json'
import changeNetwork from '../../utils/changeNetwork'
import './dropdown.css'

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItem] = useState(networkList.network)
  const { chainId } = useWallet()
  const [selectedItem, setSelectedItem] = useState(chainId)

  const toggleDropdown = () => setOpen(!isOpen)



  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.chainId == selectedItem).name
          : 'Select'}
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={() => changeNetwork(item.chainId)}
            id={String(item.chainId)}
          >
            <span
              className={`dropdown-item-dot ${
                item.chainId == selectedItem && 'selected'
              }`}
            >
              •{' '}
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
