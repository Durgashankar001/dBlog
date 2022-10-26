import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react'
import "./Modal.css"

export default function Modals({isOpen,setIsOpen}) {

  const onClose =() =>{
    setIsOpen(false)
  }
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader align={"center"}>Enter OTP</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <div className="modal">
              <p>OTP sent to your Email</p>
              <form action="">
              <input className="first" type="text" maxLength={1} />
             <input type="text" maxLength={1} />
             <input type="text" maxLength={1} />
             <p className="divider">-</p>
             <input type="text" maxLength={1}/>
             <input type="text" maxLength={1}/>
             <input className="last" type="text" maxLength={1}/>
             </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button m={"auto"} onClick={onClose}>Enter</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }