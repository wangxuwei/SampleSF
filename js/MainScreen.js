<apex:page controller="CustomControl">
    <apex:stylesheet value="{!URLFOR($Resource.briteapp, 'SampleSF/bootstrap/css/bootstrap-responsive.min.css')}"/>
    <apex:stylesheet value="{!URLFOR($Resource.briteapp, 'SampleSF/bootstrap/css/bootstrap.min.css')}"/>
    <script>
        document.write('<link rel="stylesheet/less" type="text/css" href="{!URLFOR($Resource.briteapp, 'SampleSF/css/import.less')}" />');
        document.write('<script type="text/javascript" src="{!URLFOR($Resource.briteapp, 'SampleSF/js/less-1.3.0.min.js')}"><\/script>');
    </script>
    <apex:includeScript value="{!URLFOR($Resource.briteapp, 'SampleSF/js/jquery.min.js')}"/>
    <apex:includeScript value="{!URLFOR($Resource.briteapp, 'SampleSF/js/jsrender.js')}"/>
    <apex:includeScript value="{!URLFOR($Resource.briteapp, 'SampleSF/js/brite.js')}"/>
    <apex:includeScript value="{!URLFOR($Resource.briteapp, 'SampleSF/js/app.js')}"/>
    <apex:includeScript value="{!URLFOR($Resource.briteapp, 'SampleSF/js/MainScreen.js')}"/>
    <script>
        brite.config.tmplPath = "{!URLFOR($Resource.briteapp, 'SampleSF/tmpl/')}";
        jQuery.noConflict();
        var $ = jQuery;
    </script>
    
    <apex:pageBlock id="bodyPage">
        Hello {!$User.FirstName}!
    </apex:pageBlock>
    
    <script type="text/javascript">
        $(document).ready(function() {    
             brite.display("MainScreen",".pbBody");
        });
    </script>
</apex:page>