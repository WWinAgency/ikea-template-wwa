<template>
  <div class="avaliacoesProdutoPessoal">
    <div class="avaliacoesProdutoPessoal-outter-col">
      <div class="avaliacoesProdutoPessoal-row-1">
        <div class="row-1-inner-col">
          <div class="row-1-inner-row-1">
            <div class="rating-stars">
              <div class="rating-row">
                <div class="rating-col-1">
                  <star-rating
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    inactive-color="white"
                    active-color="black"
                    v-bind:star-size="15"
                    :rating="rating"
                    :show-rating="false"
                    read-only="true"
                  >
                  </star-rating>
                </div>

                <div class="rating-col-2">
                  <div class="col-2-inner-row">
                    <h4>{{ clientName }} - {{ day }}/{{ month }}/{{ year }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="avaliacoesProdutoPessoal-row-2">
        <div class="row-2-inner-col">
          <div class="row-2-inner-row-1">
            <div class="row-1-inner-col">
              <div class="row-1-inner-row-1">
                {{ generalEvaluation }}
              </div>
              <div class="row-1-inner-row-2">
                {{ specificEvaluation }}
              </div>
              <div class="row-1-inner-row-3">
                <b-icon
                  class="check-icon"
                  icon="check"
                  scale="2"
                  variant="dark"
                ></b-icon>
                Sim, recomendo este produto
              </div>
            </div>
          </div>
          <div class="row-2-inner-row-3">
            <div class="inner-col-1">
              Como avalia a facilidade de montagem e/ou instalação?
            </div>
            <div class="inner-col-2">
              <div class="col-2-inner-col-1">
                <b-progress
                  height="1rem"
                  :value="values[valueAssembly]"
                  variant="dark"
                  class="w-100 "
                ></b-progress>
              </div>
              <div class="col-2-inner-col-2">
                <div class="valor">{{ values[valueAssembly] }}</div>
              </div>
            </div>
          </div>
          <div class="row-2-inner-row-4">
            <div class="inner-col-1">
              Como avalia a relação qualidade/preço?
            </div>
            <div class="inner-col-2">
              <div class="col-2-inner-col-1">
                <b-progress
                  height="1rem"
                  :value="values[valuePrice]"
                  variant="dark"
                  class="w-100 "
                ></b-progress>
              </div>
              <div class="col-2-inner-col-2">
                <div class="valor">{{ values[valuePrice] }}</div>
              </div>
            </div>
          </div>
          <div class="row-2-inner-row-5">
            <div class="inner-col-1">
              Como avalia a qualidade do produto?
            </div>
            <div class="inner-col-2">
              <div class="col-2-inner-col-1">
                <b-progress
                  height="1rem"
                  :value="values[valueQuality]"
                  variant="dark"
                  class="w-100 "
                ></b-progress>
              </div>
              <div class="col-2-inner-col-2">
                <div class="valor">{{ values[valueQuality] }}</div>
              </div>
            </div>
          </div>
          <div class="row-2-inner-row-6">
            <div class="inner-col-1">
              Como avalia o aspeto final do produto?
            </div>
            <div class="inner-col-2">
              <div class="col-2-inner-col-1">
                <b-progress
                  height="1rem"
                  :value="values[valueLooks]"
                  variant="dark"
                  class="w-100 "
                ></b-progress>
              </div>
              <div class="col-2-inner-col-2">
                <div class="valor">{{ values[valueLooks] }}</div>
              </div>
            </div>
          </div>
          <div class="row-2-inner-row-7">
            <div class="inner-col-1">
              Indique se o produto cumpre as suas espetativas
            </div>
            <div class="inner-col-2">
              <div class="col-2-inner-col-1">
                <b-progress
                  height="1rem"
                  :value="values[valueExpectations]"
                  variant="dark"
                  class="w-100 "
                ></b-progress>
              </div>
              <div class="col-2-inner-col-2">
                <div class="valor">{{ values[valueExpectations] }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },
  props: {
    rating: Number,
    clientName: String,
    day: Number,
    month: Number,
    year: Number,
    generalEvaluation: String,
    specificEvaluation: String,
    valueAssembly: Number,
    valuePrice: Number,
    valueQuality: Number,
    valueLooks: Number,
    valueExpectations: Number,
  },
  data() {
    return {
      values: [0, 20, 40, 60, 80, 100],
      max: 100,
    };
  },
};
</script>

<style lang="scss">
.avaliacoesProdutoPessoal {
  padding: 1rem 2rem 2rem 0;
  & .avaliacoesProdutoPessoal-outter-col {
    width: 100%;
    & .avaliacoesProdutoPessoal-row-1 {
      & .row-1-inner-col {
        & .row-1-inner-row-1 {
          font-weight: 700;
          font-size: 2.25rem;

          & .rating-stars {
            padding-bottom: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center !important;
            & .rating-row {
              display: inline-flex;
              width: 100%;
              height: 100%;
              list-style: none;
              padding-left: 0;
              align-items: center !important;
              & .rating-col-1 {
                float: left;
                width: 40%;
                margin-top: 0.5rem;
              }
              & .rating-col-2 {
                float: right;
                width: 60%;
                position: relative;

                & .col-2-inner-row {
                  position: absolute;
                  right: 0;
                  & h4 {
                    font-size: 0.8rem !important;
                  }
                }
              }
            }
          }
        }
      }
    }
    & .avaliacoesProdutoPessoal-row-2 {
      width: 100%;
      & .row-2-inner-col {
        width: 100%;
        & .row-2-inner-row-1 {
          width: 100%;

          & .row-1-inner-col {
            & .row-1-inner-row-1 {
              padding-bottom: 0.5rem;
              font-weight: 700;
              color: #484848;
              font-size: 0.875rem;
              line-height: 1.57;
            }
            & .row-1-inner-row-2 {
              margin-bottom: 2rem;
              color: #484848;
              font-size: 0.875rem;
              line-height: 1.57;
            }
            & .row-1-inner-row-3 {
              padding-bottom: 2rem;
              color: #484848;
              font-size: 0.75rem;
              line-height: 1.57;

              & .check-icon {
                margin-right: 0.5rem;
              }
            }
          }
        }
        & .row-2-inner-row-2 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            width: 100%;
            & .rating-stars {
              display: flex;
              align-items: center;
              & .rating-col {
                display: flex;
                align-items: center;
                list-style: none;
                padding-left: 0;
                position: relative;
                width: 100%;
                height: 100%;

                & .rating-col-1 {
                  display: flex;
                  align-items: center;
                  position: absolute;
                  left: 0;
                  margin-bottom: 0.5rem;
                }
                & .rating-col-2 {
                  display: flex;
                  align-items: center;
                  position: absolute;
                  right: 0;
                  & h4 {
                    color: #484848;
                    font-size: 0.875rem;
                    line-height: 1.57;
                    margin-bottom: 0;
                  }
                }
              }
            }
          }
        }
        & .row-2-inner-row-3 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            float: right;
            width: 100%;
            height: 100%;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;

            & .col-2-inner-col-1 {
              float: left;
              width: 83%;
              padding-right: 0.3rem;
            }
            & .col-2-inner-col-2 {
              float: right;
              width: 17%;
              position: relative;
              display: flex;
              align-items: center;

              & .valor {
                position: absolute;
                right: 0;
                font-size: 0.875rem;
                line-height: 1.57;
                color: #484848;
              }
            }
          }
        }
        & .row-2-inner-row-4 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            float: right;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            & .col-2-inner-col-1 {
              width: 83%;
              padding-right: 0.3rem;
            }
            & .col-2-inner-col-2 {
              float: right;
              width: 17%;
              position: relative;
              display: flex;
              align-items: center;

              & .valor {
                position: absolute;
                right: 0;
                font-size: 0.875rem;
                line-height: 1.57;
                color: #484848;
              }
            }
          }
        }
        & .row-2-inner-row-5 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            float: right;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            & .col-2-inner-col-1 {
              width: 83%;
              padding-right: 0.3rem;
            }
            & .col-2-inner-col-2 {
              float: right;
              width: 17%;
              position: relative;
              display: flex;
              align-items: center;

              & .valor {
                position: absolute;
                right: 0;
                font-size: 0.875rem;
                line-height: 1.57;
                color: #484848;
              }
            }
          }
        }
        & .row-2-inner-row-6 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            float: right;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;

            & .col-2-inner-col-1 {
              width: 83%;
              padding-right: 0.3rem;
            }
            & .col-2-inner-col-2 {
              float: right;
              width: 17%;
              position: relative;
              display: flex;
              align-items: center;

              & .valor {
                position: absolute;
                right: 0;
                font-size: 0.875rem;
                line-height: 1.57;
                color: #484848;
              }
            }
          }
        }
        & .row-2-inner-row-7 {
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: 100%;
          margin-bottom: 0.5rem;

          & .inner-col-1 {
            float: left;
            min-width: 60%;
            height: 100%;
            padding: 0 1.25rem 0 0;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .inner-col-2 {
            float: right;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            & .col-2-inner-col-1 {
              width: 83%;
              padding-right: 0.3rem;
            }
            & .col-2-inner-col-2 {
              float: right;
              width: 17%;
              position: relative;
              display: flex;
              align-items: center;

              & .valor {
                position: absolute;
                right: 0;
                font-size: 0.875rem;
                line-height: 1.57;
                color: #484848;
              }
            }
          }
        }
      }
    }
  }
}
</style>
