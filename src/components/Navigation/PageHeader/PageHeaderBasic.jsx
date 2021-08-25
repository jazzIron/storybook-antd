import React from 'react';
import { PageHeader } from 'antd';

/* API */
/** Empty
avatar	AvatarProps
backIcon	ReactNode | boolean
breadcrumb	Breadcrumb
breadcrumbRender	(props, originBreadcrumb)=> ReactNode
extra	ReactNode
footer	ReactNode
ghost	boolean
subTitle	ReactNode
tags	Tag[] | Tag
title	ReactNode
onBack	() => void
 */

const BreadcrumbBasic = ({
    avatar,
    backIcon,
    breadcrumb,
    breadcrumbRender,
    extra,
    footer,
    ghost,
    subTitle,
    tags,
    title,
    onBack,
    children
}) => {
    return (
        <PageHeader
            avatar={{ src: avatar }}
            backIcon={backIcon}
            breadcrumb={breadcrumb}
            ghost={ghost}
            onBack={onBack}
            title={title}
            subTitle={subTitle}
            tags={tags}
            extra={extra}
            footer={footer}
        >
            {children}
        </PageHeader >

    )
}

export default BreadcrumbBasic;