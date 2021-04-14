import React, { PureComponent, ReactElement } from 'react';
import classNames from 'classnames';
import { Dragging } from 'types';

type DraggableProps = {
  id: number;
  isDraggingTempo?: boolean;
  isDraggingMe?: boolean;
  onDragStart?: (id: number, dom: HTMLDivElement, e: React.SyntheticEvent) => void;
  dragging: Dragging;
};

export default (className: string) => (GroupOrRule: ReactElement<any>) => {
  return class Draggable extends PureComponent<DraggableProps> {
    wrapper: React.RefObject<HTMLDivElement>;

    constructor(props: DraggableProps) {
      super(props);
      this.wrapper = React.createRef();
    }

    handleDraggerMouseDown = (e: React.SyntheticEvent) => {
      const dom = this.wrapper.current as HTMLDivElement;
      const { id, onDragStart } = this.props;

      if (onDragStart) {
        onDragStart(id, dom, e);
      }
    };

    render() {
      const { id, isDraggingTempo, isDraggingMe, dragging, ...otherProps } = this.props;

      let styles = {};
      if (isDraggingMe && isDraggingTempo) {
        styles = {
          top: dragging.y,
          left: dragging.x,
          width: dragging.w,
        };
      }

      const cn = classNames(
        className,
        'group-or-rule',
        isDraggingMe && isDraggingTempo ? 'qb-draggable' : null,
        isDraggingMe && !isDraggingTempo ? 'qb-placeholder' : null
      );

      return (
        <div className={cn} style={styles} ref={this.wrapper} data-id={id}>
          <GroupOrRule
            handleDraggerMouseDown={this.handleDraggerMouseDown}
            isDraggingMe={isDraggingMe}
            isDraggingTempo={isDraggingTempo}
            {...otherProps}
          />
        </div>
      );
    }
  };
};
