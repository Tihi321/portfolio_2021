import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions";
import { EBreakpoints, ESide } from "../../enums";
import { EProjectFields, TProject } from "../../projects";
import { smallFontThemeResponsiveFontStyles } from "../../styles";
import { backgroundColor } from "../../themes";
import { media } from "../../utils";
import { EFeaturedButtonType, FeaturedButton } from "../Buttons/FeaturedButton";
import { TagText } from "../Common/TagText";
import { ETextSizes, TextSize } from "../Common/TextSize";
import { ListItem } from "./ListItem";

const ProjectListStyled = styled.div`
  position: relative;
`;

const ListStyled = styled.dl`
  margin: 20px 0;
`;

const TagTextStyled = styled(TagText)`
  display: block;
  ${smallFontThemeResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${smallFontThemeResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

const HeaderStyled = styled.span`
  display: block;
  position: sticky;
  top: 0;
  padding: 15px 0;
  background-color: ${backgroundColor};
`;

interface IProjectListProps extends IStyledProps {
  onClose: () => void;
  project: TProject;
}

export const ProjectList = ({
  onClose,
  project,
  className
}: IProjectListProps) => (
  <ProjectListStyled className={className}>
    <HeaderStyled>
      <FeaturedButton type={EFeaturedButtonType.Wide} onClick={onClose}>
        Close
      </FeaturedButton>
    </HeaderStyled>
    <ListStyled>
      {Object.keys(EProjectFields).map((key, cellIndex) => {
        if (project[EProjectFields[key]] !== undefined) {
          switch (EProjectFields[key]) {
            case EProjectFields.Tags:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Tags}-${project[
                    EProjectFields.Tags
                  ].join("-")}-${cellIndex}}`}
                  text={EProjectFields.Tags}
                >
                  {project[EProjectFields.Tags].map((tag, index) => (
                    <TagTextStyled key={`tag--${tag}-${index}`} text={tag} />
                  ))}
                </ListItem>
              );
            case EProjectFields.Type:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Type}-${
                    project[EProjectFields.Type]
                  }-${cellIndex}}`}
                  text={EProjectFields.Type}
                >
                  <TextSize size={ETextSizes.Regular}>
                    {project[EProjectFields.Type]}
                  </TextSize>
                </ListItem>
              );
            case EProjectFields.Techonolgies:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Techonolgies}-${project[
                    EProjectFields.Techonolgies
                  ].join("-")}-${cellIndex}}`}
                  text={EProjectFields.Techonolgies}
                >
                  {project[EProjectFields.Techonolgies].map((tech, index) => (
                    <TagTextStyled key={`tech--${tech}-${index}`} text={tech} />
                  ))}
                </ListItem>
              );
            case EProjectFields.Repository:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Repository}-${
                    project[EProjectFields.Repository].name
                  }-${cellIndex}}`}
                  text={EProjectFields.Repository}
                >
                  <TextSize size={ETextSizes.Regular}>
                    {project[EProjectFields.Repository].name}
                  </TextSize>
                </ListItem>
              );
            case EProjectFields.Showcase:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Showcase}-${
                    project[EProjectFields.Showcase].name
                  }-${cellIndex}}`}
                  text={EProjectFields.Showcase}
                >
                  <TextSize size={ETextSizes.Regular}>
                    {project[EProjectFields.Showcase].name}
                  </TextSize>
                </ListItem>
              );

            default:
              return (
                <ListItem
                  key={`cell--${EProjectFields.Name}-${
                    project[EProjectFields.Name]
                  }-${cellIndex}}`}
                  text={EProjectFields.Name}
                >
                  <TextSize size={ETextSizes.Regular}>
                    {project[EProjectFields.Name]}
                  </TextSize>
                </ListItem>
              );
          }
        }

        return "";
      })}
    </ListStyled>
  </ProjectListStyled>
);
