import { off } from 'process'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { idText } from 'typescript'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import changeNetwork from '../../utils/changeNetwork'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect, error } = useWallet()

  useEffect(() => {
    if (error) {
      alert("Please change network to Rinkeby")
      changeNetwork(4)
    }
  }, [error])

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider." />

      <ModalContent>
        <StyledWalletsWrapper>
          <WalletCard
            icon={<img src={metamaskLogo} style={{ height: 32 }} />}
            onConnect={() => connect('injected')}
            title="Metamask"
          />
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
