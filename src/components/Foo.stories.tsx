import { React, css, color, describe } from '../test/storybook';
import { prettier } from '../common';

describe('sample', {
  title: 'Sample prettier browser usage.',
  width: 450,
}).add('Prettier', () => <Test />);

/**
 * INTERNAL
 */

const DEFAULT_CODE = `

  const FOO = 123

    function foo(p1,    p2) {
      return true
    }
       const bar = (e) => 'hello'
`.substr(0);

export interface ITestState {
  code?: string;
}

export class Test extends React.PureComponent<{}, ITestState> {
  public state: ITestState = { code: DEFAULT_CODE };
  public render() {
    const styles = {
      base: css({
        Flex: 'vertical-stretch-stretch',
      }),
      code: css({
        boxSizing: 'border-box',
        border: `solid 1px ${color.format(-0.2)}`,
        borderRadius: 3,
        padding: 10,
        margin: 0,
        marginBottom: 15,
        fontFamily: `Menlo, Monaco, 'Lucida Console', Courier, monospace`,
        fontSize: 12,
        color: '#F2273C',
      }),
      button: css({
        color: '#4990E2',
        cursor: 'pointer',
      }),
    };
    return (
      <div {...styles.base}>
        <pre {...styles.code}>{this.state.code}</pre>
        <div {...styles.button} onClick={this.handleFormatClick}>
          Make Prettier
        </div>
      </div>
    );
  }

  private handleFormatClick = () => {
    const code = prettier.format(this.state.code);
    console.log('code', code);
    this.setState({ code });
  };
}
