import React from 'react'

function Wrapper({ id }) {
    return (
        <>

            {
                id === 0 && (
                    <div>
                        <p>Our strategy supports the overall business in terms of adding value and profit as we look both outside and inside to make it.
                            The outside allows us to understand the key trends shaping consumer expectations and to prioritize the relevant domain for innovation investment.
                            And inside to understand the weakness and the strengths of the innovation system. The strategy enables the innovation system to gain traction by pinpointing the most important areas for investment</p>
                    </div>
                )
            }
            {
                id === 1 && (
                    <div>
                        <p>Strategy is necessary but it is never sufficient for the demand, decisive action and speed are required to create profit by shortening product and business model life cycles.
                            Our sprint-based approach leads us to create the MVP with a strategy that is faster to market in the minimum time frame.
                            The Test and Learn approach allows us to test the system from the beginning and learn about it by feedback and usability making the product more efficient.
                        </p>
                    </div>
                )

            }
            {
                id === 2 && (
                    <div>
                        <p>Maximizing the return on innovation investments requires the ability to find product-market fit and scale the most promising projects fast.
                            Our working approach allows us to work closely with our clients to support them in making the transition from experimentation to execution of a new product, service, or business model.
                        </p>
                    </div>
                )

            }
            {
                id === 3 && (
                    <div>
                        <p>Increasingly, innovation success calls for the ability to continually build new innovation muscles—or to bring in new skills and capabilities from outside.
                         We help organizations identify the critical capabilities needed and define the best path to obtain them, whether through corporate venturing, partnership, acquisition, or internal development.
                        </p>
                    </div>
                )

            }


        </>
    )
}

export default Wrapper