import React from "react";
import "./choose.css";
import { usp } from "../../../Data";
// local components
import Spacing from "../../Global/spacing/Sapcing";
import Item from "../Item/Item";
import { PTypography, PrimaryHeading, MarginLine } from "../../Reusable/Reusable";
// materail ui
import { Grid } from "@mui/material";
// react router dom

const Choose = () => {
  return (
    <Spacing>
      <MarginLine>
        <Grid container sx={{ color: "lightgray" }}>
          <Grid item xs={12}>
            <PrimaryHeading variant="h3" color="white" mb={2} className="Choose">
              WHY <br /> CHOOSE US
            </PrimaryHeading>
          </Grid>
          <Grid
            item
            sm={12}
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                paddingRight: theme.spacing(4),
              },
            })}>
            <PTypography
              component="p"
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  width: "70%",
                },
              })}>
              What makes our services better than our contenders is that our services
              are very reasonable regarding cost. We have crafted plans for different
              needs to help you choose the one that suits your budget and demands.
            </PTypography>
            <PTypography
              component="p"
              sx={(theme) => ({
                [theme.breakpoints.up("md")]: {
                  width: "60%",
                },
              })}>
              We eliminate the hustle of paying 10% or more to truck dispatch service
              for every load and, this is why our trucking dispatch services have
              become popular globally for all dispatch needs.
            </PTypography>
          </Grid>
          {usp.map((item, index) => {
            return (
              <Grid item sm={6} key={index}>
                <Item {...item} />
              </Grid>
            );
          })}
        </Grid>
      </MarginLine>
    </Spacing>
  );
};

export default Choose;
