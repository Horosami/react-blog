import React from 'react';
import { Row, Col } from 'antd';

export const MainPage = () => {
    return (
        <div className="gutter-example">
            <Row>
                <Col xs={24} sm={24} md={16} lg={16} xl={16} className="btm-offset-one">
                    app-post-img TAG app-post-img
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            POST new POST
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            POST new POST
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

/*
<!-- programming post -->
<div class="container">
<div class="row">
    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <app-programming></app-programming>
        <app-website-dev></app-website-dev>
        <app-game-dev></app-game-dev>
        <app-career-in-it></app-career-in-it>
        <app-interfaces></app-interfaces>    
        <app-latest-posts></app-latest-posts>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <!--more popular-->
        <div class="header-title">
            <h2 class="title">More popular</h2>
        </div>
        <!-- 01 -->
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <h3 class="more-popular-numb">01</h3>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h2 class="more-popular-title">What about Frontend?</h2>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span class="date-post">12 April</span>
                <span class="read-post">&bull; 05 min read</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
                <span class="comments-post">12</span>
            </div>
        </div>

        <!-- 02 -->
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <h3 class="more-popular-numb">02</h3>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h2 class="more-popular-title">What about Frontend?</h2>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span class="date-post">12 April</span>
                <span class="read-post">&bull; 05 min read</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
                <span class="comments-post">12</span>
            </div>
        </div>

        <!-- 03 -->
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <h3 class="more-popular-numb">03</h3>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h2 class="more-popular-title">What about Frontend?</h2>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span class="date-post">12 April</span>
                <span class="read-post">&bull; 05 min read</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
                <span class="comments-post">12</span>
            </div>
        </div>

        <!-- 04 -->
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <h3 class="more-popular-numb">04</h3>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h2 class="more-popular-title">What about Frontend?</h2>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span class="date-post">12 April</span>
                <span class="read-post">&bull; 05 min read</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
                <span class="comments-post">12</span>
            </div>
        </div>

        <!-- 05 -->
        <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <h3 class="more-popular-numb">05</h3>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <h2 class="more-popular-title">What about Frontend?</h2>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                <span class="date-post">12 April</span>
                <span class="read-post">&bull; 05 min read</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
                <span class="comments-post">12</span>
            </div>
        </div>

        <!--quiz-->
        <div class="header-title">
                <h2 class="title">Quiz</h2>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h3>What operating system are you using?</h3>

                    <mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
                    <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
                        {{season}}
                    </mat-radio-button>
                    </mat-radio-group>
                    <div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>
                    <button mat-raised-button color="primary">Add voice</button>
                </div>
        </div>



        <!--top 10 tags-->
        <div class="header-title">
            <h2 class="title">Top 10 tags</h2>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <mat-chip-list>
                    <mat-chip>Naan</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Career in IT</mat-chip>
                    <mat-chip>Naan</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Papadum</mat-chip>
                    <mat-chip>Bitcoin</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Angular</mat-chip>
                    <mat-chip>Frontend</mat-chip>
                    <mat-chip>Naan</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Career in IT</mat-chip>
                    <mat-chip>Naan</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Papadum</mat-chip>
                    <mat-chip>Bitcoin</mat-chip>
                    <mat-chip>Dal</mat-chip>
                    <mat-chip>Angular</mat-chip>
                </mat-chip-list>
            </div>
        </div>





        <!--social-->
        <div class="header-title">
            <h2 class="title">Social networks</h2>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul class="social-links">
                    <button mat-mini-fab>
                        <i class="fa fa-vk" aria-hidden="true"></i>
                    </button>
                    <button mat-mini-fab>
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </button>
                    <button mat-mini-fab>
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </button>
                    <button mat-mini-fab>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </button>
                    <button mat-mini-fab>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </button>
                </ul>
            </div>
        </div>


        <!--advertisement-->
        <div class="header-title">
                <h2 class="title">Advertisement</h2>
        </div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img class="img-responsive" src="https://images.unsplash.com/photo-1473122430480-d00e6dd25ba8?ixlib=rb-0.3.5&s=bca2535452db6c65e72b7026bf101ab8&auto=format&fit=crop&w=1350&q=80" alt="banner">
            </div>
        </div>



    </div>
</div>
</div> */

    )
}
