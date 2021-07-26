import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

interface Props {
  text: string;
}

class CopyButton extends React.Component<Props> {
  state = {
    copied: false,
  };

  render() {
    return (
      <div>
        <CopyToClipboard
          text={this.props.text}
          onCopy={() => this.setState({ copied: true })}
        >
          <IconButton aria-label='copy link button'>
            <LinkIcon
              style={{ fill: this.state.copied ? '#81c784' : 'white' }}
            />
          </IconButton>
        </CopyToClipboard>
      </div>
    );
  }
}

export default CopyButton;
