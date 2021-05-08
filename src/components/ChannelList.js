import React from 'react'
import styled from 'styled-components'

function ChannelList() {

    const tvChannels = [
        [2, "TVN", "LOCAL"],
        [4, "RPC", "LOCAL"],
        [5, "FETEV", "LOCAL"],
        [9, "TVMAX", "LOCAL"],
        [11, "SERTV", "LOCAL"],
        [13, "TELEMETRO", "LOCAL"],
        [23, "MAS 23", "LOCAL"],
        [234, "TNT", "MOVIES"],
        [235, "SPACE", "MOVIES"],
        [237, "CINECANAL", "MOVIES"],
        [238, "FX MOVIE", "MOVIES"],
        [240, "STUDIO UNIVERSAL", "MOVIES"],
        [251, "GOLDEN", "MOVIES"],
        [253, "PARAMOUNT", "MOVIES"],
        [271, "STAR CHANNEL", "SERIES"],
        [272, "WARNER", "SERIES"],
        [274, "UNIVERSAL", "SERIES"],
        [275, "FX", "SERIES"],
        [286, "DISCOVERY ID", "SERIES"],
        [302, "CNN SPANISH", "NEWS"],
        [304, "FOX NEWS", "NEWS"],
        [326, "CNN INTL", "NEWS"],
        [336, "DISNEY", "CARTOONS"],
        [337, "CARTOON NETWORK", "CARTOONS"],
        [339, "NICKELODEON", "CARTOONS"],
        [371, "COS", "SPORTS"],
        [373, "ESPN", "SPORTS"],
        [375, "FOX SPORTS", "SPORTS"],
        [426, "DISCOVERY", "VARIETY"],
        [428, "NAT GEO", "VARIETY"],
        [429, "HISTORY", "VARIETY"],
        [432, "E! ENTERTAINMENT", "VARIETY"],
        [433, "A&E", "VARIETY"],
        [442, "CARACOL", "VARIETY"],
        [458, "TELEMUNDO", "VARIETY"],
    ]

    return (
        <Container>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Channel</th>
                        <th>Channel Name</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tvChannels.map((channel, key) => (
                            <tr key={key}>
                                <td>{channel[0]}</td>
                                <td>{channel[1]}</td>
                                <td>{channel[2]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}

export default ChannelList

const Container = styled.div``