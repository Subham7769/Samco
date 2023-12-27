import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img1 from '../Assets/stocknote.png'
import img2 from '../Assets/stocknote1.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconContainer">
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaGooglePlusG />
        </div>
        <div>
          <FaLinkedinIn />
        </div>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaYoutube />
        </div>
      </div>
      <div className="details">
        <div>
          <span>
            <p>
              <b>Disclaimer:</b> Investments in Mutual Funds are subject to
              market risks. Please read all scheme related documents carefully
              before investing. Past performance is not an indicator of future
              returns.
            </p>
            <p>
              There is no guarantee of returns and investors confirm that
              neither guaranteed returns nor assured returns are being offered
              to them by RankMF or any of it’s employees or associates.
            </p>

            <p>
              Past performance may or may not be sustained in the future.
              Investors are advised to consult their own legal, tax and
              financial advisors to determine possible tax, legal and other
              financial implication or consequence of subscribing to SmartSIP
              order type. The data or figures mentioned on the RankMF shall not
              be construed as indicative yields/returns of any of the variants
              or products of RankMF or SmartSIP.
            </p>
            <p>
              SAMCO Securities Limited and SAMCO Ventures Pvt Limited. make no
              warranties or representations, express or implied, on products
              offered through the platform. It accepts no liability for any
              damages or losses, however caused, in connection with the use of,
              or on the reliance of its product or related services.
            </p>
            <p>
              RankMF is an Mutual fund order collection platform that is
              integrated with BSE StarMF. All orders collected and placed with
              BSE StarMF. Investors and clients agree that RankMF/SAMCO
              Securities Limited are not liable or responsible for and do not
              represent or warrant for any damages regarding non-execution or
              incorrect execution of orders with respect to the schemes selected
              by the clients, but not being limited to, any link/system failure,
              sufficient/insufficient funds in the trading account which may
              occur at the end of the client, RankMF/SAMCO Securities Limited or
              the exchange platform.
            </p>

            <p>
              Samco Securities Limited is Mutual Fund Distributor registered
              with AMFI (ARN -120121){" "}
            </p>
            <p>SAMCO Ventures Private Limited - INA000013828</p>
            <p>
              Registered Address: SAMCO Securities Limited, 1004 - A, 10th
              Floor, Naman Midtown - A Wing, Senapati Bapat Marg, Elphinstone
              Road, Mumbai - 400 013, Maharashtra, India.
            </p>
          </span>
        </div>
        <div>
          <span>
              <b>Attention Investors:</b>
            <p>
              "Prevent un-authorized transactions in your account --> Update
              your mobile numbers/email IDs with your stock brokers and
              depository participants. Receive information of your transactions
              directly from Exchange or Depository on your mobile/email at the
              end of the day. Issued in the interest of investors"
            </p>
            <p>
              "If the User provides with the e-mail address and phone number,
              the User agrees to receive periodic messages from RankMF, a Samco
              Securities Limited Brand with information on new products and
              services or upcoming events as it may deem fit."
            </p>
            <p>
              "KYC is one time exercise while dealing in securities markets -
              once KYC is done through a SEBI registered intermediary (broker,
              DP, Mutual Fund etc.), you need not undergo the same process again
              when you approach another intermediary."
            </p>

            <p>
              "No need to issue cheques by investors while subscribing to IPO.
              Just write the bank account number and sign in the application
              form to authorise your bank to make payment in case of allotment.
              No worries for refund as the money remains in investor's account."
            </p>

            <p>
              *All Information Contained On The Site Is For General
              Informational Use Only And Should Not Be Relied Upon By You In
              Making Any Investment Decision. The Site Does Not Provide
              Investment Advice And Nothing On The Site Should Be Construed As
              Being Investment Advice. Before Making Any Investment Choice You
              Should Always Consult A Fully Qualified Financial Adviser.
            </p>

            <p>
              * Although Rankmf And Samco Securities Limited Uses Its Reasonable
              Efforts To Ensure That Information On The Site Is Accurate And
              Complete, We Cannot Guarantee This To Be The Case. As A Result,
              Use Of The Site Is At Your Sole Risk And Rankmf And Samco
              Securities Cannot Accept Any Liability For Loss Or Damage Suffered
              By You Arising From Your Use Of Information Contained On The Site.
              You Should Take Adequate Steps To Verify The Accuracy And
              Completeness Of Any Information Contained On The Site.
            </p>
          </span>
        </div>
      </div>
      <div className="rights">
        <div>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        </div>
        <div>
            <p>Copyright © 2023 RankMF | All Rights Reserved</p>
        </div>
        

      </div>
      <div className="footerNav">
            <a href="">Knowledge Center</a>
            <a href=""> Account Opening Status</a>
            <a href=""> Why RankMF</a>
            <a href="">FAQ</a>
            <a href=""> Privacy Policy</a>
            <a href=""> Support</a>
      </div>
    </div>
  );
};

export default Footer;
