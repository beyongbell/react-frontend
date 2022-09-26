import React from 'react'

import { makeStyles } from "tss-react/mui";

import fullStar from "@images/full-star.svg"
import halfStar from "@images/half-star.svg"
import emptyStar from "@images/empty-star.svg"

const useStyles = makeStyles()((theme) => {
    return {
        size: {
            height: "2rem",
            width: "2rem"
        }
    }
})

const Rating = ({ number }) => {
    const diff = 5 - Math.ceil(number)
    const { classes } = useStyles();
    return (
        <>
        {[...Array(Math.floor(number))].map((e, i) => (
          <img src={fullStar} alt="full star" key={i} className={classes.size} />
        ))}
        {number % 1 !== 0 ? (
          <img src={halfStar} alt="half star" className={classes.size} />
        ) : null}
        {[...Array(diff)].map((e, i) => (
          <img
            src={emptyStar}
            alt="empty star"
            key={`${i}-empty`}
            className={classes.size}
          />
        ))}
      </>
    )
}

export default Rating;