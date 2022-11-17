import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'webtraining-video-player',
    styleUrl: 'webtraining-video-player.css',
    shadow: true
})
export class WebtrainingVideoPlayer {
    
    @Prop() source;

    render() {
        if (!this.source) {
            return <div>No video source provided!</div>
        }

      return (<iframe width="560" height="315" src={this.source} frameborder="0"></iframe> )
    }

}