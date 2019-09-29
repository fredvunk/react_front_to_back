import React, {memo, useState} from 'react'
import {useSpring, a} from 'react-spring'
import {useMeasure, usePrevious} from '../Examples/helpers'
import {Global, Frame, Title, Content, toggle} from '../Examples/styles'
import * as Icons from '../Examples/icons'

const Tree = memo(({children, name, style, defaultOpen = false}) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [bind, {height: viewHeight}] = useMeasure();

    const {height, opacity, transform} = useSpring({
        from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
        }
    });

    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
    return (
        <Frame>
            <Icon style={{...toggle, opacity: children ? 1 : 0.3}}
                  onClick={() => setOpen(!isOpen)}/>
            <Title style={style}>{name}</Title>
            <Content style={{
                opacity,
                height: isOpen && previous === isOpen ? 'auto' : height
            }}>
                <a.div style={{transform}} {...bind} children={children}/>
            </Content>
        </Frame>
    )
});

const Naited = () => (
    <>
        <Global/>
        <div style={{ marginTop: '80px' }}></div>
        <Tree name="Näited" defaultOpen>
            <Tree name="To Do List">
                <div className="linkOne"  style={{ padding: '5px' }}>
                    <a href="https://codesandbox.io/s/ppmy26opw7" target="_blank" rel="noopener noreferrer">Kuidas teha To Do Listi</a>
                </div>
            </Tree>
            <Tree name="Animatsioon">
                <Tree name="Animatsioon">
                    <Tree>
                        <div className="linkOne" >
                        <a href="https://codesandbox.io/s/o46l299mkq"  target="_blank" rel="noopener noreferrer">Näide 1</a>
                        </div>
                    </Tree>
                    <Tree>
                        <div className="linkOne" >
                        <a href="https://codesandbox.io/s/w0orz7j5p8" target="_blank" rel="noopener noreferrer">Näide 2</a>
                        </div>
                    </Tree>
                    <Tree>
                        <div className="linkOne" >
                        <a href="https://codesandbox.io/s/z397wo86p3" target="_blank" rel="noopener noreferrer">Näide 3</a>
                        </div>
                    </Tree>
                </Tree>
            </Tree>
            <Tree name="Mäng">
                <div className="linkOne"  style={{ padding: '5px' }}>
                <a href="https://codesandbox.io/s/z6vw5qdbr" target="_blank" rel="noopener noreferrer">Kuidas teha trips traps trull mängu</a>
                </div>
            </Tree>
            <Tree name="Hello World!">
                <div className="linkOne"  style={{ padding: '5px' }}>
                <a  href="https://codesandbox.io/s/k9v972q3lr" target="_blank" rel="noopener noreferrer">Kuidas kirjutada "Hello World!" Reactis</a>
                </div>
            </Tree>
            <Tree name="React Hooks">
                <div className="linkOne" style={{ padding: '5px' }}>
                <a href="https://codesandbox.io/s/7y6o4282lq?from-embed"
                   target="_blank" rel="noopener noreferrer">Näide, kuidas React Hook töötab</a>
                </div>
            </Tree>
        </Tree>
    </>
);


export default Naited;