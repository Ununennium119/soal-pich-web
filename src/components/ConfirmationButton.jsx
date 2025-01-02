import PropTypes from "prop-types";
import React, {useEffect, useRef, useState} from 'react';
import {Button, Overlay, Popover} from 'react-bootstrap';

const ConfirmationPopover = ({triggerButton, onConfirm, placement = 'left', text = 'Are you sure?'}) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const overlayRef = useRef(null);

    const handleToggle = () => setShow(!show);
    const handleConfirm = () => {
        onConfirm();
        setShow(false);
    };
    const handleClose = () => setShow(false);
    const handleClickOutside = (event) => {
        if (
            overlayRef.current &&
            !overlayRef.current.contains(event.target) &&
            !target.current.contains(event.target)
        ) {
            setShow(false);
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [show]);

    return (
        <div style={{display: 'inline-block'}}>
            <div ref={target} onClick={handleToggle}>
                {triggerButton}
            </div>

            <Overlay
                target={target.current}
                show={show}
                placement={placement}
                containerPadding={20}
                ref={overlayRef}
            >
                {(props) => (
                    <Popover {...props} id="confirmation-popover">
                        <Popover.Header as="h3">{text}</Popover.Header>
                        <Popover.Body>
                            <div className="d-flex justify-content-between">
                                <Button variant="danger" size="sm" onClick={handleConfirm}>
                                    Yes
                                </Button>
                                <Button variant="secondary" size="sm" onClick={handleClose}>
                                    No
                                </Button>
                            </div>
                        </Popover.Body>
                    </Popover>
                )}
            </Overlay>
        </div>
    );
};
ConfirmationPopover.propTypes = {
    triggerButton: PropTypes.element.isRequired,
    onConfirm: PropTypes.func.isRequired,
    placement: PropTypes.string,
}

export default ConfirmationPopover;
