import { Environment, useGLTF, Float, PresentationControls, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience() {

    const macbook = useGLTF('./macbook.gltf');

    return (
        <>
            <Environment preset='city' />

            <color args={['#b3cee5']} attach='background' />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{mass: 2, tension: 400}}
                snap={{mass: 2, tension: 400}}
            >
                <Float rotationIntensity={0.4}>
                    <primitive
                        object={macbook.scene}
                        position-y={-1.2}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                        >
                            <iframe src='https://simple-portfolio-chi-three.vercel.app/' />
                        </Html>
                    </primitive>
                    <Text 
                        font='./aldrich-v17-latin-regular.woff'
                        fontSize={0.5}
                        position={[2, 0.75, 0.75]}
                        rotation-y={-1.25}
                        maxWidth={2}
                    >
                        Jack Youkstetter
                    </Text>
                </Float>
            </PresentationControls>

            <ContactShadows 
                position-y={-1.4}
                opacity={0.6}
                scale={6}
                blur={2.4}
            />
        </>
    );
}