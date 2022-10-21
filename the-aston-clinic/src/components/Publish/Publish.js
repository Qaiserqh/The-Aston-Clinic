import React, { useState } from 'react'
import '../../Utilities/Publish.css'
import '../../Utilities/Text.css'
import { Button } from '../Button/Button'
import { Modal, Carousel } from 'react-bootstrap'

function Publish({ treatments }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='row box'>
      <div className='col-md-4'>
        <img src={treatments.imageurls[0]} className='smallimg' />
      </div>
      <div className='col-md-7 textAlignleft'>
        <h1>{treatments.type}</h1>
        <p>{treatments.name}</p>
        <p>£{treatments.cost}</p>

        <div className='moveRight'>
          <a href={`/book/${treatments._id}`}>
          <span className='m-2'>
            <Button>
                Book Now
            </Button>
          </span>
          </a>
          <Button onClick={handleShow}>
            View Details
          </Button>
        </div>
      </div>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{treatments.type} {treatments.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {treatments.imageurls.map(url=>{
              return <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={url}
              />
            </Carousel.Item>
            })}
          </Carousel>
          <p>{treatments.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Publish