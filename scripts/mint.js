const SoomokProof = artifacts.require("../contracts/SoomokProof.sol");

const holders = [
  { address: '0x220c1cF1E7F34445E994b50fa18b0a716e7f7F67', amount: 5 },
  { address: '0x9920e8C1516d0b4f8099390Ab3577d06aDDB5E9e', amount: 5 },
  { address: '0xA6f33dDFc930Fb1DDE733F7F73ACdF8449E24C35', amount: 3 },
  { address: '0xd4aAD3F56Da75E7e0158c590C006ABCE52E846Ab', amount: 3 },
  { address: '0x1F2f93962c97c15817Bf46f0fe41b47018F9C19d', amount: 3 },
  { address: '0x5fc5ed40f94151E20511238D72AEE68a8D39Dd56', amount: 3 },
  { address: '0x5fB47d193C3b35054c4EE5D4fa00b225ff94F110', amount: 3 },
  { address: '0xF17B47BBFe77AbD1D8a14f76f33A4715acA29f39', amount: 3 },
  { address: '0x63B13DBEa969afdD81Fe724686E9cA9fA43e7F14', amount: 2 },
  { address: '0x390B54fC34892B8f0c33B4E359f49Ff35358e2Ff', amount: 2 },
  { address: '0x7FBd1C52903c0fCb0167083658Be3CdFDe06229A', amount: 2 },
  { address: '0xCba00AE5b3D0560A97aff811e63e01D397f67061', amount: 2 },
  { address: '0xA97f9394382e072E28f40e03DAE833ee15f62D7a', amount: 2 },
  { address: '0x058A0E3FF2149C765741a18B8221f7B6Ca24655f', amount: 2 },
  { address: '0x06e5DB292D2b014a5a723FFCe47c46638c360f0d', amount: 2 },
  { address: '0x973d419d2e07f8ecf901305aF4aD295fD2dF6947', amount: 2 },
  { address: '0x94257B2F1998D38E3E08bf7eC61b469d0298cF05', amount: 2 },
  { address: '0xE1b89c34BA683ecDAC5D96625427340ceeff771A', amount: 2 },
  { address: '0x1C7F54C66D17a1057D6cF04Becc5929F76183601', amount: 2 },
  { address: '0xfB9BeED12e06df357dd53abe96EdD04ACEaEcB5B', amount: 2 },
  { address: '0x676610c6c9e4645e2C791Ce0195e18A51dE72985', amount: 2 },
  { address: '0xed7e703D5AB8d1AC1812A64E7eBd2E18E56F9f52', amount: 2 },
  { address: '0xF6E674CaE9B645208ce60D884e29854861322889', amount: 2 },
  { address: '0x53e3FDfcC718BFDd8937a1251C3c04aC95c5Ec68', amount: 1 },
  { address: '0x7a4D4A6B2e1875A5dF3176Eb103c9f3bbB436AEA', amount: 1 },
  { address: '0xfD07ee7d93401826D14738cB114eA1E8914C123C', amount: 1 },
  { address: '0xafFD2Bf4Da5a5dB6d64AC7EBEF820cE5344f1ed6', amount: 1 },
  { address: '0xC268874883F9098dda451B2bA7f920b95255BC2b', amount: 1 },
  { address: '0xA992Df80630AA813146109d76A2BF72802144b45', amount: 1 },
  { address: '0x949F980C492DFE3c9071A9F2B2512F6D28bA5CC8', amount: 1 },
  { address: '0x2548a4B4554E760b4CD20c7eaE4cbE9864DbfE32', amount: 1 },
  { address: '0xc9d58C3568c23EFe94cd0EDb31AC271066153301', amount: 1 },
  { address: '0x934791b35207910f44dB3084b8b45d34D76756F5', amount: 1 },
  { address: '0x98e42D1329F72F971cF10c51A144C6344BB8c7d0', amount: 1 },
  { address: '0xD810B82CDb3054254891E982984Fc86a48B10D52', amount: 1 },
  { address: '0x6b24FB1Ca5053128CaF76fCdACd76146b57854A2', amount: 1 },
  { address: '0xd10EC51771dCC8dc1146D1537D7DFe1857A90974', amount: 1 },
  { address: '0xc1673Db70CDA50ECF441D1684297Ee25A5e32b34', amount: 1 },
  { address: '0x5A5327B73417bf1a02a76EEfB0430ce8630a0537', amount: 1 },
  { address: '0x4772707bFAcb17BD423Aea7C56A2086bE7d4d15F', amount: 1 },
  { address: '0xe7Be36A97173d8B3c1376C2761f80c2453fF36F6', amount: 1 },
  { address: '0x5f20165fA2aADcCd387cbCe3447549504D2B7d2E', amount: 1 },
  { address: '0x465C685Ea8265BC41F970F3436821EAacCDd7A53', amount: 1 },
  { address: '0x127B7D74c8fecBF66Ca10486A174b9E4a30e9632', amount: 1 },
  { address: '0x270b69fdC63Ff3361f043a20b67fd7E851a972AB', amount: 1 },
  { address: '0xc50dc955e4D2f3FD70bc9198F628c638604745Fa', amount: 1 },
  { address: '0x2dd86e31Ca54d50D38d0678B226b9Db5E7156dDE', amount: 1 },
  { address: '0xE1b17eE25A4271256A126B2388D3FF29459b8618', amount: 1 },
  { address: '0x43dDd4a57027CBCa7E9C4A309b5FE6368DC25b3e', amount: 1 },
  { address: '0x5B52802acB69f4F0B55d63BaC8554bC400af77C5', amount: 1 },
  { address: '0x625cAbbB3139ce797AC28b481a66f8BD418cf611', amount: 1 },
  { address: '0x31138F8aCB06Ae3e19c205Fa751537ac0068bB5d', amount: 1 },
  { address: '0x997BAf47802F957E05c21c0a0a4416aC586d6BB0', amount: 1 },
  { address: '0x8aF5346ba82e2B8Cd76A3d86d51E7Ec75b79d3D5', amount: 1 },
  { address: '0xb705Da828f2fb40b3D9e416e22c7A51cb9d7ce09', amount: 1 },
  { address: '0xC633013813554c00431F80eAc369E44dC47Aa71d', amount: 1 },
  { address: '0xa7845f5D22b72c73e6332825ECC255A46b80A55D', amount: 1 },
  { address: '0x444277b333d3316905a825fd5b0e7030300DBd4C', amount: 1 },
  { address: '0x650fD2F051a4758d3DA910b2e5045d1e0A64d41a', amount: 1 },
  { address: '0x99E0a40fC2760Ea009B0714b3B0028736B7F3635', amount: 1 },
  { address: '0xb037933e7a80A0aB966C14a2BbE0FA17957f0142', amount: 1 },
  { address: '0x5f925E9dD49E07Dc33144384381Dd363258C4F69', amount: 1 },
  { address: '0xf0d62731e4867d02BD8653fD86254802e6Bc2cb8', amount: 1 },
  { address: '0x90aC54701FD03fc10D013836577b6a9E3535eB8A', amount: 1 },
  { address: '0xE005d64b7b076132a6fC56144E775a43E0beB1CB', amount: 1 }
];

module.exports = async function(callback) {
  const contract = await SoomokProof.deployed();
  for await (const holder of holders) {
    for await (const _ of Array(holder.amount).fill()) {
      const receipt = await contract.mintTo(holder.address);
      console.log(receipt);
      await new Promise(resolve => setTimeout(resolve, 60000));
    }
  }
  console.log('minting done.')
}