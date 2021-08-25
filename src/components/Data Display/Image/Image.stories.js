import React from "react";
import Index from './Index';
import ImageBasic from './ImageBasic';
import ImagePreview from './ImagePreview';
import PropTypes from 'prop-types';

export default {
    component: ImageBasic, //해당 컴포넌트
    title: "Data Display/Image", //Storybook 앱의 사이드바에서 컴포넌트를 참조하는 방법
    excludeStoires: "", //Storybook에서 스토리를 내보낼 때 렌더링에서 제외 하는것
    parameters: {
    }, //callback event 수신 
    argTypes: {
        height: {
            defaultValue: '',
            control: { type: 'text' },
        },
        width: {
            defaultValue: 200,
            control: { type: 'number' },
        },
    }, //각각의 스토리에서 인수(args)의 행동 방식을 명시
    decorators: [(Story) => (<Index><Story /></Index>)
    ], //내보내기 시 앞 뒤로 데코레이션 설정
};


const handleError = (event) => console.log(event);
const ImageTemplate = (args) => <ImageBasic {...args} />;

export const Basic = ImageTemplate.bind({});
Basic.args = {
    alt: 'TEST_IMAGE_FILE',
    placeholder: 'placeholder Field',
    src: `https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp`,
    onError: handleError()
}

Basic.propTypes = {
    // data: PropTypes.array.isRequired,
    // bordered: PropTypes.bool.isRequired,
    // itemLayout: PropTypes.oneOf(['horizontal', 'vertical']),
    // size: PropTypes.oneOf(['default', 'large', 'small']),
};

const ImagePreviewTemplate = (args) => <ImagePreview {...args} />;
export const Preview = ImagePreviewTemplate.bind({});
Preview.args = {
}

